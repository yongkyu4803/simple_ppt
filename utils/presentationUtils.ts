import fs from 'fs';
import path from 'path';

export interface PresentationMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function getPresentationMetadata(): PresentationMeta[] {
  const presentationsDir = path.join(process.cwd(), 'presentations');
  
  // presentations 폴더가 존재하지 않으면 빈 배열 반환
  if (!fs.existsSync(presentationsDir)) {
    return [];
  }
  
  const presentations: PresentationMeta[] = [];
  
  // presentations 폴더의 모든 디렉토리를 읽기
  const folders = fs.readdirSync(presentationsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !name.startsWith('.')); // 숨김 폴더 제외
  
  for (const folder of folders) {
    const presentationPath = path.join(presentationsDir, folder, 'Presentation.tsx');
    
    // Presentation.tsx 파일이 존재하는지 확인
    if (fs.existsSync(presentationPath)) {
      try {
        const content = fs.readFileSync(presentationPath, 'utf8');
        
        // 제목과 부제목을 추출하는 정규식
        const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
        const subtitleMatch = content.match(/subtitle:\s*['"`]([^'"`]+)['"`]/);
        
        const title = titleMatch ? titleMatch[1] : folder.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const description = subtitleMatch ? subtitleMatch[1] : `${title} 프레젠테이션`;
        
        presentations.push({
          id: folder,
          title,
          description,
          icon: getIconForPresentation(folder)
        });
      } catch (error) {
        console.error(`Error reading presentation metadata for ${folder}:`, error);
        // 오류가 발생해도 기본 정보로 추가
        presentations.push({
          id: folder,
          title: folder.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: `${folder} 프레젠테이션`,
          icon: 'FaRegFileAlt'
        });
      }
    }
  }
  
  return presentations;
}

function getIconForPresentation(id: string): string {
  // 프레젠테이션 ID에 따라 적절한 아이콘 반환
  const iconMap: { [key: string]: string } = {
    'demo': 'FaRocket',
    'digital-transformation': 'FaLayerGroup',
    'modern': 'FaRegFileAlt',
    'project-proposal': 'FaProjectDiagram',
    'basic-example': 'FaBook',
    'template-generator': 'FaPen',
    'templates': 'FaClone'
  };
  
  return iconMap[id] || 'FaRegFileAlt';
}
