import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import companyJuniorIllustration1 from '~/assets/公司的小小前辈-插图-1-正式稿-norlin.jpg';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import sketchDrawingVideo from '~/assets/sketch_drawing.mp4';
import videoGongs from '~/assets/gongs.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import { Footer } from '~/components/footer';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = <strong>绘画基础练习辅助工具</strong>;
const description = (
  <span style={{ fontWeight: 200, fontSize: '18px', lineHeight: '2', textAlign: 'justify', display: 'block' }}>
  在进行绘画基础练习时，我发现市面上缺乏一款能够定时切换图片并且指定自己文件夹的参考图软件。我向许多画师朋友咨询，他们的建议都是分别使用计时器和图片浏览器，到了时间后手动切换到下一张图片，这种方法既麻烦又不便。为了解决这个问题，我开发了一款整合了这些功能的软件，用户可以轻松设置定时器，并自动切换到自己指定文件夹中的图片。
  这个软件完全免费，并且我已经分享给了我的画师朋友们，他们都觉得这款软件非常实用。
  </span>
);
const roles = [
  'User Research',
  'UX Design',
  'Interface Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection>
        <ProjectSectionContent>
        <ProjectImage
  raised
  key={theme}
  srcSet={
    isDark
      ? `${sliceAppLarge} 1280w`  // 在暗色主题下使用 slice-app-large.jpg
      : `${sliceAppLarge} 1280w`  // 在亮色主题下使用 slice-app-large.jpg
  }
  width={600}
  height={400}
  placeholder={
    isDark
      ? sliceAppLarge  // 暗色主题的占位符图片
      : sliceAppLarge  // 亮色主题的占位符图片
  }
  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
  alt="Slice App Large Image"
/>
</ProjectSectionContent>
        </ProjectSection>
       < ThemeProvider theme="Light" data-invert>
        <ProjectSection
  backgroundOverlayOpacity={0}
>
  <ProjectSectionColumns>
    <ProjectSectionContent>
      <ProjectTextRow width="xl">
        <ProjectSectionHeading><strong>软件功能展示</strong></ProjectSectionHeading>
        <ProjectSectionText>
         这个软件的主要功能展示，你可以通过这个视频学习如何使用这个软件。
        </ProjectSectionText>
        
      </ProjectTextRow>
    </ProjectSectionContent>
    <video
        className={styles.video}
        src={sketchDrawingVideo}
        style={{
          width: '100%',  // 使视频在可用空间内填充
          maxWidth: '1280px',  // 设置视频的最大宽度
          height: 'auto',  // 高度自动调整以保持比例
        }}
        controls
        alt="Sketch Drawing Video"
        sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1280px`}
      />
  </ProjectSectionColumns>
  </ProjectSection>
  <ProjectSection>
  <ProjectSectionContent>
  <ProjectTextRow>
    <ProjectSectionHeading>
      <a
        href="https://github.com/NORLIN-22/SketchDrawingApp/releases/download/v1.0/sketch_drawing.zip"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: theme === 'dark' ? '#00E5FF' : 'black',
          textDecoration: 'underline',
          textDecorationColor: theme === 'dark' ? '#00E5FF' : 'black',
        }}
      >
        <strong>sketch_drawing 点击下载</strong>
      </a>
    </ProjectSectionHeading>
              <ProjectSectionText>
                下载压缩包后你需要解压打开这个压缩包里面的exe文件才能运行。你可以点击上面的文字下载。
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
</ProjectSection>
 </ThemeProvider>
      </ProjectContainer>
      <Footer />
    </>
  );
};
