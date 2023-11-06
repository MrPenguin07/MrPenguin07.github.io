---
title: "SwayFX: Sway, but with eye candy!"
date: 2023-11-05T08:06:25+06:00
description: Sway fork with fx_renderer, capable of rendering with fancy GLES2 effects
menu:
  sidebar:
    name: SwayFX
    identifier: swayfx-1
    parent: sway-main
    weight: 12
hero: images/swayfx_screenshot.jpg
tags:
- SwayWM
- DesktopEffects
- Rendering
---

# Introducing SwayFX:
### A Cutting-Edge Fork of the Sway Window Manager

{{< img src="images/swayfx_logo.svg" height="300" width="300" align="left" title="SwayFX Logo">}}

## Enhanced Rendering with FX_Renderer

SwayFX, a pioneering fork of the well-established Wayland window manager Sway, brings revolutionary features and visual enhancements.<br>
Central to SwayFX is the `fx_renderer`, which replaces the simpler `wlr_renderer`, unleashing the potential of GLES2 for a visually stunning desktop experience.

### Key Features

- **Blur Effects**
- **Rounded Corners and Borders**
- **Shadows**
- **Dim Unfocused Windows**
- **Per Application Saturation Control**

## Seamless Integration with Sway

SwayFX maintains complete compatibility with the Sway configuration file, allowing users to transition smoothly without needing to alter their existing setups.<br>
The following new configuration options can be used to enable the advanced rendering feature set.

{{< img src="images/screenshot.png" height="416" width="739" align="left" title="SwayFX Example">}}
<mark>Above: User **wickedlester** shows off rounded corners & shadows</mark>

{{< img src="images/screenshot2.png" height="416" width="739" align="left" title="SwayFX Example2">}}
<mark>Above: User **Danie** shows off inactive blur effects</mark>

### New Configuration Options

##### Window Blur

- `blur enable|disable`
- `blur_xray enable|disable`
- `blur_passes <integer>`
- `blur_radius <integer>`

##### Corner Radius

- `corner_radius <val>`

##### Window Shadows

- `shadows enable|disable`
- `shadows_on_csd enable|disable`
- `shadow_blur_radius <integer>`
- `shadow_color <hex color>`
- `shadow_inactive_color <hex color>`

##### LayerShell Effects

layer_effects using the syntax `<layer namespace> <effects>` <br>

The current layer namespaces can be shown with<br>
`swaymsg -r -t get_outputs | jq '.[0].layer_shell_surfaces | .[] | .namespace'` <br>

- Available Effects:

    * `blur <enable|disable>`
    * `blur_ignore_transparent <enable|disable>`
    * `shadows <enable|disable>`
    * `corner_radius <int>`

> Example: `layer_effects "waybar" blur enable; shadows enable; corner_radius 6`


##### Dim Unfocused Windows

- `default_dim_inactive <float>`
- `for_window [CRITERIA] dim_inactive <float>`
- `dim_inactive_colors.unfocused <hex color>`
- `dim_inactive_colors.urgent <hex color>`

##### Application Saturation

- `for_window [CRITERIA] saturation <set|plus|minus> <val>`

### My Personal Config

Have settled, at least for now, with the following config;
```
smart_corner_radius on
corner_radius 10
default_dim_inactive 0.05
blur enable
blur_passes 2
blur_radius 2
layer_effects "waybar" "blur enable"; shadows enable
shadows on
shadow_blur_radius 20
```

### Roadmap: What’s Next for SwayFX

- **Fade In/Out Animations**
- **Window Movement Animations**



##### <a href="https://github.com/WillPower3309/swayfx">Check out the SwayFX Github page!</a></center>
---

