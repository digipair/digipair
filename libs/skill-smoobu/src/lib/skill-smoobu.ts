/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

class SmoobuService {
  private SMOOBU_API_KEY: string;
  private API_ENDPOINT: string;

  constructor(context: any, params: any) {
    this.SMOOBU_API_KEY =
      context.privates.SMOOBU_API_KEY ?? params?.SMOOBU_API_KEY ?? process.env['SMOOBU_API_KEY'];
    this.API_ENDPOINT =
      context.privates.SMOOBU_API_ENDPOINT ??
      params?.SMOOBU_API_ENDPOINT ??
      process.env['SMOOBU_API_ENDPOINT'] ??
      'https://login.smoobu.com/api';
  }

  async call(url: string, method: string, data: any = null, headers: any = {}) {
    const response = await fetch(`${this.API_ENDPOINT}${url}`, {
      method,
      headers: {
        'Api-Key': this.SMOOBU_API_KEY,
        ...headers,
      },
      body: data,
    });
    if (!response.ok) throw new Error('[SKILL-SMOOBU] REQUEST FAILED: ' + response.status);
    return await response.json();
  }

  async getReservationWithId(
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const { reservationId } = params;
    return await this.call(`/reservations/${reservationId}`, 'GET');
  }

  async getAllReservations(
    _params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    return await this.call(`/reservations`, 'GET');
  }

  async event(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      updateRates = [],
      newReservation = [],
      cancelReservation = [],
      updateReservation = [],
    } = params;
    const actions = { updateRates, newReservation, cancelReservation, updateReservation };

    return await executePinsList(
      actions[
        context.request.body.action as
          | 'updateRates'
          | 'newReservation'
          | 'cancelReservation'
          | 'updateReservation'
      ],
      context,
    );
  }
}

export const event = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SmoobuService(context, params).event(params, pinsSettingsList, context);

export const getReservationWithId = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SmoobuService(context, params).getReservationWithId(params, pinsSettingsList, context);

export const getAllReservations = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new SmoobuService(context, params).getAllReservations(params, pinsSettingsList, context);
