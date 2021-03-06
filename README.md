# splash-text
SplashText adorns your application with a splash of color when the user hovers their mouse over text!

# Installation

`npm install --save splash-text`

# Usage

SplashText is configured entirely through its props.

|Prop         |Type           |Description                                        |
|:------------|:--------------|:--------------------------------------------------|
|`baseColor`  |`string`       |Defines the default text color                     |
|`duration`   |`number`       |Duration (in seconds) the animation will last      |
|`enterColors`|`array<string>`|Defines the colors and order of the color rings    |
|`interval`   |`number`       |Interval (in milliseconds) between color rings     |
|`text`       |`string`       |Text to be displayed                               |
|`textStyle`  |`object`       |styling to be applied to the text                  |

# Example

```jsx
  <SplashText
    enterColors={[
      '#3333FF',
      '#8833FF',
      '#FF3388',
    ]}
    baseColor='#FFFFFF'
    interval={200}
    duration={2}
    textStyle={{
      fontSize: 100,
    }}
    text='This is text'
  />
```

![Quick Demo :)](https://raw.githubusercontent.com/torencaldwell/splash-text/master/demo/splashTextDemo.gif)
