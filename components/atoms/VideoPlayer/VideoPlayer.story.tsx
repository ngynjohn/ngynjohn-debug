import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import VideoPlayer from './VideoPlayer';

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

export const Primary: ComponentStory<typeof VideoPlayer> = () => <VideoPlayer />;
