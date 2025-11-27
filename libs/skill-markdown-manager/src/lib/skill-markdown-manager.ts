/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

class MarkdownManagerService {
  async splitMdIntoSections(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { md } = params;
    const lines = md.split(/\r?\n/);

    const sections: {title: string, md: string}[] = [];

    let currentPath: string[] = [];      // hierarchical title path
    let currentBuffer: string[] = [];    // raw markdown lines
    let firstSectionStarted = false;
  
    const flush = () => {
      if (currentPath.length === 0) return;
      const mdSection = currentBuffer.join("\n").trim();
      sections.push({
        title: currentPath.join(" >> "),
        md: mdSection
      });
      currentBuffer = [];
    };
  
    for (const line of lines) {
      const titleMatch = /^(#+)\s+(.*)$/.exec(line);
  
      if (titleMatch) {
        const level = titleMatch[1].length;
        const title = titleMatch[2].trim();
  
        // close previous section
        if (firstSectionStarted) flush();
        firstSectionStarted = true;
  
        // update hierarchy depth
        currentPath = currentPath.slice(0, level - 1);
        currentPath[level - 1] = title;
      } else {
        if (firstSectionStarted) currentBuffer.push(line);
      }
    }
  
    // flush last section
    flush();
  
    return sections;

    
  }
}

export const splitMdIntoSections = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new MarkdownManagerService().splitMdIntoSections(params, pinsSettingsList, context);
