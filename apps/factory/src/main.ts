/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';

import { AppModule } from './app/app.module';
import { copyFileSync, existsSync, lstatSync, mkdirSync, readdirSync, rmSync } from 'fs';
import path from 'path';

function copyDirectoryRecursive(source: string, target: string) {
  if (!existsSync(source)) {
    Logger.error(`The source directory "${source}" doesn't exist.`);
    return;
  }

  if (!existsSync(target)) {
    mkdirSync(target);
  }

  const files = readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (lstatSync(sourcePath).isDirectory()) {
      copyDirectoryRecursive(sourcePath, targetPath);
    } else {
      copyFileSync(sourcePath, targetPath);
    }
  });
}

async function bootstrap() {
  /* create factory directory and copy files from assets if empty or not exist */

  const digipairsDir = process.env.DIGIPAIR_FACTORY_PATH || './factory';
  Logger.log(`Check if the digipairs folder exists`);
  if (!existsSync(digipairsDir)) {
    Logger.log(`-> digipairs folder not exists: ${digipairsDir}`);
    mkdirSync(digipairsDir);
    Logger.log(`-> digipairs folder created: ${digipairsDir}`);
  } else {
    Logger.log(`-> digipairs folder exists: ${digipairsDir}`);
  }

  const assetsDir = `${__dirname}/src/app/assets`;
  const digipairsFiles = readdirSync(digipairsDir);

  Logger.log(
    `Check if the factory folder is already filled with digipairs files. Number files found: ${digipairsFiles.length}`,
  );
  if (!digipairsFiles.length) {
    Logger.log(`Digipair files not found -> start copy from digipair assets folder: ${assetsDir}`);
    copyDirectoryRecursive(assetsDir, digipairsDir);
    Logger.log(`Copy finished`);
  } else {
    Logger.log(`Digipair files already present: ${digipairsFiles.join(', ')}`);

    // Replace directories in digipairs (except common) with those from assets
    const digipairsSourceDir = `${assetsDir}/digipairs`;
    const digipairsTargetDir = `${digipairsDir}/digipairs`;

    Logger.log(`Updating digipairs directories from assets (excluding common)`);

    const digipairFolders = readdirSync(digipairsSourceDir);

    digipairFolders
      .filter(folder => folder !== 'common')
      .forEach(folder => {
        const sourcePath = path.join(digipairsSourceDir, folder);
        const targetPath = path.join(digipairsTargetDir, folder);

        if (lstatSync(sourcePath).isDirectory()) {
          Logger.log(`-> Replacing digipair directory: ${folder}`);

          // Remove existing directory if it exists
          if (existsSync(targetPath)) {
            rmSync(targetPath, { recursive: true, force: true });
          }

          // Copy new directory
          copyDirectoryRecursive(sourcePath, targetPath);
        }
      });

    Logger.log(`Digipairs directories update completed`);
  }

  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.enableCors();

  const port = process.env.PORT || 8080;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
