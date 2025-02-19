import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sketchDrawingVideo from '~/assets/sketch_drawing.mp4';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = <strong>绘画基础练习辅助工具</strong>;
const description =
<span style={{ fontWeight: 200, fontSize: '18px', lineHeight: '2', textAlign: 'justify', display: 'block' }}>
在进行绘画基础练习时，我发现市面上缺乏一款能够定时切换图片并且指定自己文件夹的参考图软件。我向许多画师朋友咨询，他们的建议都是分别使用计时器和图片浏览器，到了时间后手动切换到下一张图片，这种方法既麻烦又不便。为了解决这个问题，我开发了一款整合了这些功能的软件，用户可以轻松设置定时器，并自动切换到自己指定文件夹中的图片。这个软件完全免费，并且我已经分享给了我的画师朋友们，他们都觉得这款软件非常实用。
</span>;
const roles = ['User Research', 'UX Design', 'Interface Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={1}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.zcool.com.cn/u/24672298"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading><strong>演示展示</strong></ProjectSectionHeading>
              <ProjectSectionText>
              <span style={{ fontWeight: 500, fontSize: '20px', lineHeight: '2', textAlign: 'justify', display: 'block' }}>
                这段视频主要展示这个软件的使用过程以及在绘画过程上的使用。感兴趣的话可以到下一页下载这个软件的压缩包使用。
                不过注意软件目前只支持<strong>window</strong>。
                </span>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
  <video
    className={styles.video}
    src={sketchDrawingVideo}
    width={1180}
    height={600}
    alt="The layers sidebar design, now with user profiles."
    controls
    sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
  />
</div>

          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>sketch_drawing 下载</ProjectSectionHeading>
              <ProjectSectionText>
                下载压缩包后你需要解压打开这个压缩包里面的exe文件才能运行。你可以点击下面的下载
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
