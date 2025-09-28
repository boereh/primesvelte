import { getContext, setContext } from 'svelte';

/**
 * ZIndex configuration options.
 */
export interface ZIndexOptions {
	/**
	 * Sets the base index value for Dialog and Sidebar components.
	 * @defaultValue 1100
	 */
	modal: number;
	/**
	 * Sets the base index value for Overlay components such as Dropdown and OverlayPanel.
	 * @defaultValue 1000
	 */
	overlay: number;
	/**
	 * Sets the base index value for Overlay menus.
	 * @defaultValue 1000
	 */
	menu: number;
	/**
	 * Sets the base index value for Tooltip.
	 * @defaultValue 1100
	 */
	tooltip: number;
	/**
	 * Sets the base index value for Toast.
	 * @defaultValue 1200
	 */
	toast: number;
}

export type InputStyleType = 'outlined' | 'filled';

export type AppendToType = 'self' | HTMLElement | undefined | null | (() => HTMLElement);

export type StyleContainerType = ShadowRoot | HTMLElement | undefined | null;

/**
 * Filter match modes for DataTable filter menus.
 */
export interface FilterMatchModeOptions {
	/**
	 * Array of filter match modes for text filtering.
	 */
	text: any[];
	/**
	 * Array of filter match modes for numeric filtering.
	 */
	numeric: any[];
	/**
	 * Array of filter match modes for date filtering.
	 */
	date: any[];
}

export interface Config {
	/**
	 * This option allows components with overlays like dropdowns or popups to be mounted into either the component or any DOM element, such as document body and self.
	 */
	appendTo?: AppendToType;
	/**
	 * This option allows `useStyle` to insert dynamic CSS styles into a specific container. This is useful when styles need to be scoped such as in a Shadow DOM.
	 * @defaultValue document.head
	 */
	styleContainer?: StyleContainerType;
	/**
	 * ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. When autoZIndex is false, each group increments its zIndex within itself.
	 */
	autoZIndex?: boolean;
	/**
	 * PrimeReact components utilize "react-transition-group" internally to implement animations. Setting "cssTransition" to "false" disables all animations.
	 * @defaultValue true
	 */
	cssTransition?: boolean;
	/**
	 * Default filter modes to display on DataTable filter menus.
	 */
	filterMatchModeOptions?: FilterMatchModeOptions;
	/**
	 * Define behavior if the browser window is scrolled while displaying an overlay panel like a Dropdown or Calendar. Depending on your organization's accessibility needs some prefer panels to be closed on scrolling and some prefer the overlay follow the scroll.
	 * @defaultValue false
	 */
	hideOverlaysOnDocumentScrolling?: boolean;
	/**
	 * Input fields have two styles: default (outlined with borders) and filled (background-colored). Applying 'p-input-filled' to an input's ancestor enables the filled style.
	 */
	inputStyle?: InputStyleType;
	/**
	 * The locale configuration sets up the language and region specific preferences.
	 * @defaultValue 'en'
	 */
	locale?: string;
	/**
	 * The nonce value to use on dynamically generated style elements.
	 */
	nonce?: string;
	/**
	 * Determines how null values are sorted.
	 * @defaultValue 1
	 */
	nullSortOrder?: number;
	/**
	 * Ripple is an optional animation for the supported components such as buttons.
	 * @defaultValue false
	 */
	ripple?: boolean;
	/**
	 * ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. When autoZIndex is false, each group increments its zIndex within itself. Each property is optional, so when autoZIndex is enabled you can set the z-index for any component type, and the rest will be calculated automatically.
	 * @defaultValue { modal: 1100, overlay: 1000, menu: 1000, tooltip: 1100, toast: 1200}
	 */
	zIndex?: Partial<ZIndexOptions>;
	/**
	 * This option allows to direct implementation of all relevant attributes (e.g., style, classnames) within the respective HTML tag.
	 */
	// pt?: PrimeReactPTOptions;
	/**
	 * Used to configure passthrough(pt) options of the component.
	 * @type {PassThroughOptions}
	 */
	// ptOptions?: PassThroughOptions;
	/**
	 * When enabled, it removes all of components styles in the core.
	 * @defaultValue false
	 */
	unstyled?: boolean;
}

export const setConfig = (cfg?: Config) => setContext('prime.config', cfg);
export const getConfig = () => getContext<Config>('prime.config');
