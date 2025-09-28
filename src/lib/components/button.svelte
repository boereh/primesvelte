<script module lang="ts">
	export type ButtonProps = {
		class?: ClassValue;
		label?: string;
		icon?: string | Snippet | Component;
		iconposition?: 'left' | 'right' | 'top' | 'bottom';
		iconclass?: ClassValue;
		badge?: string;
		badegeclass?: ClassValue;
		badgeseverity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast';
		loading?: boolean;
		loadingicon?: string | Snippet | Component;
		severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast';
		raised?: boolean;
		rounded?: boolean;
		outlined?: boolean;
		text?: boolean;
		size?: 'small' | 'medium' | 'large';
		variant?: 'solid' | 'outline' | 'text' | 'link';
		fluid?: boolean;
		unstyled?: boolean;
		disabled?: boolean;
		children?: Snippet;
		onClick?: (e: MouseEvent) => void | Promise<void>;
	};
</script>

<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	let {
		class: className,
		label,
		icon,
		iconposition = 'left',
		iconclass,
		badge,
		badegeclass,
		badgeseverity,
		loading = false,
		loadingicon = 'i-lucide-loader-circle',
		severity,
		raised = false,
		rounded = false,
		outlined = false,
		text = false,
		size = 'medium',
		variant = 'solid',
		fluid = false,
		unstyled = false,
		disabled = false,
		children,
		onClick
	}: ButtonProps = $props();
</script>

{#if }
	
{/if}


{#snippet Content()}{/snippet}

{#snippet Icon()}
	{#if icon}
		{#if typeof icon === 'string'}
			<span class={['pi',icon, iconclass]}  />
		{:else}
			{#if typeof icon === 'function'}
				<svelte:component this={icon} class={iconclass} />
			{:else}
				{icon}
			{/if}
		{/if}
	{/if}
{/snippet}
