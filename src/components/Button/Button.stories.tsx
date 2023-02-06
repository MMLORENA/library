import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import React from "react";
import Button from "./Button";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Button,
} as ComponentMeta<typeof Button>; 


export const Default: ComponentStory<typeof Button> = () => <Button/>; 
