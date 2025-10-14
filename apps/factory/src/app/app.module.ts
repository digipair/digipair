import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';
import * as path from 'path';

// 🔍 Récupère automatiquement tous les sous-dossiers @digipair/*
function getSkillStaticPaths() {
  const nodeModulesDir = path.join(process.cwd(), 'node_modules/@digipair');

  if (!fs.existsSync(nodeModulesDir)) {
    console.warn('⚠️ Aucun dossier @digipair trouvé dans node_modules');
    return [];
  }

  const skills = fs
      .readdirSync(nodeModulesDir, { withFileTypes: true })
      .filter(dir => dir.isDirectory())
      .map(dir => dir.name);

  // Génère la config ServeStatic pour chaque skill
  return skills.map(skillName => {
    const skillPath = path.join(nodeModulesDir, skillName, 'dist');

    if (!fs.existsSync(skillPath)) {
      console.warn(`⚠️ Aucun dossier dist/ trouvé pour ${skillName}`);
      return null;
    }
    console.log('🧩 ServeStatic ->', skillName, '=>', skillPath, fs.existsSync(skillPath));

    return {
      rootPath: skillPath,
      serveRoot: `/studio/workers/__digipair_www__/@digipair/${skillName}@latest/dist`,
    };
  }).filter(Boolean); // retire les null
}

@Module({
  imports: [
    // 🔧 Ajoute dynamiquement un ServeStaticModule par skill
    ...getSkillStaticPaths().map(staticConfig => ServeStaticModule.forRoot(staticConfig)),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// @Module({
//   imports: [
//     ServeStaticModule.forRoot({
//       rootPath: join(__dirname, '../../node_modules'),
//       serveRoot: '/studio/workers/__digipair_www__',
//       serveStaticOptions: {
//         index: false,
//         redirect: false,
//       },
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
