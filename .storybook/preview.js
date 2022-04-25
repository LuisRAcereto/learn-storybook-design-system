import React from "react";
import { GlobalStyle } from "../src/shared/global";

/**
 * Global decorator to apply the style to all stories
 * More at: https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];

/**
 * Read more about global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
