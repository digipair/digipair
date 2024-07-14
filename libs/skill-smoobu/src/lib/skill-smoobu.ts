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
    params: any,
    _pinsSettingsList: PinsSettings[],
    _context: any,
  ): Promise<any> {
    const {
      created_from,
      created_to,
      from,
      to,
      modifiedFrom,
      modifiedTo,
      arrivalFrom,
      arrivalTo,
      departureFrom,
      departureTo,
      showCancellation,
      excludeBlocked,
      page,
      pageSize,
      apartmentId,
      includeRelated,
      includePriceElements,
    } = params;
    const queryParams = new URLSearchParams();

    if (created_from) queryParams.append('created_from', created_from);
    if (created_to) queryParams.append('created_to', created_to);
    if (from) queryParams.append('from', from);
    if (to) queryParams.append('to', to);
    if (modifiedFrom) queryParams.append('modifiedFrom', modifiedFrom);
    if (modifiedTo) queryParams.append('modifiedTo', modifiedTo);
    if (arrivalFrom) queryParams.append('arrivalFrom', arrivalFrom);
    if (arrivalTo) queryParams.append('arrivalTo', arrivalTo);
    if (departureFrom) queryParams.append('departureFrom', departureFrom);
    if (departureTo) queryParams.append('departureTo', departureTo);
    if (showCancellation) queryParams.append('showCancellation', showCancellation);
    if (excludeBlocked) queryParams.append('excludeBlocked', excludeBlocked);
    if (page) queryParams.append('page', page);
    if (pageSize) queryParams.append('pageSize', pageSize);
    if (apartmentId) queryParams.append('apartmentId', apartmentId);
    if (includeRelated) queryParams.append('includeRelated', includeRelated);
    if (includePriceElements) queryParams.append('includePriceElements', includePriceElements);

    return await this.call(`/reservations?${queryParams.toString()}`, 'GET');
  }

  async sendMessage(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { reservationId, message } = params;
    return await this.call(
      `/reservations/${reservationId}/messages/send-message-to-guest`,
      'POST',
      JSON.stringify({
        messageBody: message,
      }),
    );
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
