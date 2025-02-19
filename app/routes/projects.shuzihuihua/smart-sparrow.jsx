import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import companyJuniorIllustration1 from '~/assets/公司的小小前辈-插图-1-正式稿-norlin.jpg';
import characterIllustration from '~/assets/角色插画.jpg';
import characterArtwork from '~/assets/角色插图.jpg';
import coffeeWaiter from '~/assets/咖啡服务生.jpg';
import coffeeWaiterFullBody from '~/assets/咖啡服务生-立绘.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import portioImage from '~/assets/波提欧.jpg';
import swordsmanMarch1Image from '~/assets/剑客-三月1.jpg';
import jadeImage from '~/assets/翡翠.jpg';
import nationalTeamMeiImage from '~/assets/国家队-莓.jpg';
import characterIllustrationImage from '~/assets/角色插图.jpg';
import characterDrawingImage from '~/assets/角色插画.jpg';
import coffeeWaiterImage from '~/assets/咖啡服务生.jpg';
import coffeeWaiterPortraitImage from '~/assets/咖啡服务生-立绘.jpg';
import fireflyImage from '~/assets/流萤.jpg';
import fireflyAndSamImage from '~/assets/流萤和萨姆.jpg';
import samFireflyDynamicWallpaperImage from '~/assets/萨姆流萤-动态壁纸.jpg';
import catYoukaiImage from '~/assets/猫又.jpg';
import illustrationImage from '~/assets/插画.jpg';
import drawingImage from '~/assets/插图.jpg';
import walterYangImage from '~/assets/瓦尔特-杨.jpg';
import wenLanRainyDayImage from '~/assets/温阑-雨天.jpg';
import sundayAndRobinImage from '~/assets/星期日和知更鸟.jpg';
import imageSprComponentsLightLarge from '~/assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoGongs from '~/assets/gongs.mp4';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import rainButterflyBilibiliVideo from '~/assets/雨蝶_bilibili.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
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

const title = <strong>数字绘画相关的作品</strong>;
const description = (
  <span style={{ fontWeight: 200, fontSize: '18px', lineHeight: '2', textAlign: 'justify', display: 'block' }}>
    数字绘画实际上类似于把传统纸质画作和胶片照片转换成数字格式，这不仅节省了成本，而且传播起来也更为便捷。我个人非常喜欢二次元文化，这也激发了我对绘画的热情。自从接触绘画后，我创作了许多二次元角色的画作。我甚至参与了日本动画《公司里的小小前辈》的制作，这部动画在国内也成功上映了，这让我非常兴奋。此外，我还创作了许多我喜欢的游戏的同人作品。如果你对此感兴趣，欢迎继续了解哦！
  </span>
);
const roles = [
  '公司里的小小前辈插图',
  '游戏同人插图',
  'vup-插图',
  '动漫角色设计及立绘插图',
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
        <ProjectTextRow>
    <ProjectSectionHeading>日番<strong>《公司里的小小前辈》</strong>插图</ProjectSectionHeading>
    <ProjectSectionText>
      <span style={{ fontWeight: 500, fontSize: '18px', lineHeight: '2', textAlign: 'justify', display: 'block' }}>
        到了2022年9月，我已经接触数字绘画超过一年了。在这期间，我一直在Pixiv上发布我的作品。有一次，我有幸认识了一位在N9动画公司（project No.9）工作的老师。通过这次机会，我得以参与了一部动漫的插图绘制。这对我来说是一个非常宝贵的经历。
      </span>
    </ProjectSectionText>
  </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
        <ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${companyJuniorIllustration1} 1280w`  // 在暗色主题下使用 company's image
        : `${companyJuniorIllustration1} 1280w`  // 在亮色主题下使用 company's image
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? companyJuniorIllustration1  // 暗色主题的占位符图片
        : companyJuniorIllustration1  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="公司的小小前辈 - 插图"
  />
</ProjectSectionContent>
        </ProjectSection>
       < ThemeProvider theme="Light" data-invert>
        <ProjectSection
  backgroundOverlayOpacity={0}
>
  <ProjectSectionColumns>
    <ProjectSectionContent>
      <ProjectTextRow width="s">
        <ProjectSectionHeading><strong>影片上映片段</strong></ProjectSectionHeading>
        <ProjectSectionText>
          这张插图在影片的第一集就出现了，旁边是甲方返片的原片片段。你也可以点击下面的按钮跳转到bilibili的版本。
        </ProjectSectionText>
        <ProjectSectionText>
  <a
    href="https://www.bilibili.com/bangumi/play/ep766292?spm_id_from=333.337.0.0"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: theme === 'dark' ? 'white' : 'black',
      textDecoration: 'none',
    }}
  >
    <strong>点击跳转</strong>
  </a>
</ProjectSectionText>
      </ProjectTextRow>
    </ProjectSectionContent>
    <video
      className={styles.video}
      src={videoGongs}  // 替换为你的新视频源
      width="1280"
      height="800"
      placeholder={videoSprMotionPlaceholder}  // 可以使用视频的缩略图作为占位符
      alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
      sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
      controls
      autoplay
      loop
      muted
    />
  </ProjectSectionColumns>
</ProjectSection>

        </ThemeProvider>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading><strong>游戏同人插图</strong></ProjectSectionHeading>
            <ProjectSectionText>
              下面这些作品是我对热门游戏《崩坏：星穹铁道》创作的一些同人作品。作为一个深受这款游戏吸引的玩家，我将对角色和剧情的热爱融入到了这些作品中。这些作品大多是半身插图，试图捕捉角色独特的个性和情感，并通过绘画表达我对这款游戏的深厚感情。在创作的过程中，我不仅提升了绘画技巧，还更加深入地理解了角色的设计和背景故事。希望大家能从我的作品中感受到对这款游戏的喜爱和敬意。
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${portioImage} 1280w`  // 在暗色主题下使用 波提欧.jpg
        : `${portioImage} 1280w`  // 在亮色主题下使用 波提欧.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? portioImage  // 暗色主题的占位符图片
        : portioImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Portio Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${swordsmanMarch1Image} 1280w`  // 在暗色主题下使用 剑客-三月1.jpg
        : `${swordsmanMarch1Image} 1280w`  // 在亮色主题下使用 剑客-三月1.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? swordsmanMarch1Image  // 暗色主题的占位符图片
        : swordsmanMarch1Image  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Swordsman March 1 Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${jadeImage} 1280w`  // 在暗色主题下使用 翡翠.jpg
        : `${jadeImage} 1280w`  // 在亮色主题下使用 翡翠.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? jadeImage  // 暗色主题的占位符图片
        : jadeImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Jade Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${fireflyImage} 1280w`  // 在暗色主题下使用 流萤.jpg
        : `${fireflyImage} 1280w`  // 在亮色主题下使用 流萤.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? fireflyImage  // 暗色主题的占位符图片
        : fireflyImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Firefly Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${fireflyAndSamImage} 1280w`  // 在暗色主题下使用 流萤和萨姆.jpg
        : `${fireflyAndSamImage} 1280w`  // 在亮色主题下使用 流萤和萨姆.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? fireflyAndSamImage  // 暗色主题的占位符图片
        : fireflyAndSamImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Firefly and Sam Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${samFireflyDynamicWallpaperImage} 1280w`  
        : `${samFireflyDynamicWallpaperImage} 1280w`  // 在亮色主题下使用 萨姆流萤-动态壁纸.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? samFireflyDynamicWallpaperImage  // 暗色主题的占位符图片
        : samFireflyDynamicWallpaperImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Sam and Firefly Dynamic Wallpaper Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${catYoukaiImage} 1280w`  // 在暗色主题下使用 猫又.jpg
        : `${catYoukaiImage} 1280w`  // 在亮色主题下使用 猫又.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? catYoukaiImage  // 暗色主题的占位符图片
        : catYoukaiImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Cat Youkai Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${walterYangImage} 1280w`  // 在暗色主题下使用 瓦尔特-杨.jpg
        : `${walterYangImage} 1280w`  // 在亮色主题下使用 瓦尔特-杨.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? walterYangImage  // 暗色主题的占位符图片
        : walterYangImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Walter Yang Image"
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${sundayAndRobinImage} 1280w`  // 在暗色主题下使用 星期日和知更鸟.jpg
        : `${sundayAndRobinImage} 1280w`  // 在亮色主题下使用 星期日和知更鸟.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? sundayAndRobinImage  // 暗色主题的占位符图片
        : sundayAndRobinImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Sunday and Robin Image"
  />
</ProjectSectionContent>
<ProjectSection>
        <ProjectTextRow>
    <ProjectSectionHeading><strong>VUP-插图</strong></ProjectSectionHeading>
    <ProjectSectionText>
      <span style={{ fontWeight: 500, fontSize: '18px', lineHeight: '2', textAlign: 'justify', display: 'block' }}>
       这张插图是我想画很久的一张氛围插图，刚好我比较喜欢的vup“温斓vanna”正在江南旅游，以及和朋友一起创作了原创曲《蝶舞》。我个人认为这个插图和这首曲子特别合适然后还录了视频发在了bilibili。感兴趣的话可以跳转观看，我也会把视频放在下方。
      </span>
    </ProjectSectionText>
    <ProjectSectionText>
  <a
    href="https://www.bilibili.com/video/BV1ki421a7ZZ/?spm_id_from=333.999.0.0"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: theme === 'dark' ? 'white' : 'black',
      textDecoration: 'none',
    }}
  >
    <strong>点击跳转</strong>
  </a>
</ProjectSectionText>
  </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
        <ProjectSectionContent>
  <ProjectImage
    raised
    key={theme}
    srcSet={
      isDark
        ? `${wenLanRainyDayImage} 1280w`  // 在暗色主题下使用 温阑-雨天.jpg
        : `${wenLanRainyDayImage} 1280w`  // 在亮色主题下使用 温阑-雨天.jpg
    }
    width={600}
    height={400}
    placeholder={
      isDark
        ? wenLanRainyDayImage  // 暗色主题的占位符图片
        : wenLanRainyDayImage  // 亮色主题的占位符图片
    }
    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 100px`}
    alt="Wen Lan on a Rainy Day"
  />
</ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns>
              <ProjectSectionContent>
                <ProjectTextRow width="s">
                  <ProjectSectionHeading><strong>视频展示</strong></ProjectSectionHeading>
                  <ProjectSectionText>
                    这个视频是关于温斓vanna雨天插图的绘画过程视频内容和在bililbili的内容一样。您可以在这里观看。
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
  raised
  className={styles.video}
  srcSet={`${rainButterflyBilibiliVideo} 1280w, ${rainButterflyBilibiliVideo} 2560w`}
  width={1280}
  height={800}
  placeholder={videoSprMotionPlaceholder}  // You can replace this with an appropriate placeholder for your new video if available
  alt="A scene from the video 雨蝶_bilibili.mp4."
  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
/>
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading><strong>动漫角色设计及立绘插图</strong></ProjectSectionHeading>
              <ProjectSectionText>
                下面是我的一些角色设计，主要还是动漫方向的。
              </ProjectSectionText>
           </ProjectTextRow>          
  <Image
    raised
    key={theme}
    srcSet={
      isDark
        ? `${coffeeWaiterPortraitImage} 1280w`
        : `${coffeeWaiterPortraitImage} 1280w`
    }
    width={1280}
    height={800}
    placeholder={
      isDark
        ? coffeeWaiterPortraitImage
        : coffeeWaiterPortraitImage
    }
    alt="Coffee Waiter Portrait Image"
    sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <Image
    raised
    key={theme}
    srcSet={
      isDark
        ? `${coffeeWaiterImage} 1280w`
        : `${coffeeWaiterImage} 1280w`
    }
    width={1280}
    height={800}
    placeholder={
      isDark
        ? coffeeWaiterImage
        : coffeeWaiterImage
    }
    alt="Coffee Waiter Image"
    sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
  />

  <Image
    raised
    key={theme}
    srcSet={
      isDark
        ? `${characterDrawingImage} 1280w`
        : `${characterDrawingImage} 1280w`
    }
    width={1280}
    height={800}
    placeholder={
      isDark
        ? characterDrawingImage
        : characterDrawingImage
    }
    alt="Character Drawing Image"
    sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
  />
</ProjectSectionContent>

<ProjectSectionContent>
  <Image
    raised
    key={theme}
    srcSet={
      isDark
        ? `${characterIllustrationImage} 1280w`
        : `${characterIllustrationImage} 1280w`
    }
    width={1280}
    height={800}
    placeholder={
      isDark
        ? characterIllustrationImage
        : characterIllustrationImage
    }
    alt="Character Illustration Image"
    sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
  />
</ProjectSectionContent>

        </ProjectSection>
        <ProjectSection>
            <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading><strong>关于数字绘画的一些总结</strong></ProjectSectionHeading>
              <ProjectSectionText>
                我认为绘画和照片一样都是将当下的想法记录下来。让时间定格下来，过去人们只能用绘画的形式记录时间，可随着影像相机的出现绘画却渐渐的消失了。但是，我还是愿意接着画下去，毕竟这也是我喜欢的东西。
              </ProjectSectionText>
           </ProjectTextRow> 
            </ProjectSectionContent>
        </ProjectSection>
   
      </ProjectContainer>
      <Footer />
    </>
  );
};
