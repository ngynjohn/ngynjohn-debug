import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VideoBackground from './VideoBackground';

export default {
  title: 'VideoBackground',
} as ComponentMeta<typeof VideoBackground>;

export const Primary: ComponentStory<typeof VideoBackground> = () => <VideoBackground />;
