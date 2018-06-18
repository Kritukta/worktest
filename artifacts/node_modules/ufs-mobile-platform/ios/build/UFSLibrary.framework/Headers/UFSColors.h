//
//  UFSColors.h
//  UFSPlatform
//
//  Created by Daniel Kalintsev on 22.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "UFSColorType.h"
#import <React/RCTBridgeModule.h>

@interface UFSColors : NSObject <RCTBridgeModule>

+ (UIColor *)colorFromColorType:(UFSColorType)colorType;

+ (UIColor *)buttonDisableGrayTextColor;
+ (UIColor *)buttonBlueTextColor;
+ (UIColor *)buttonBlueTextColorSelected;
+ (UIColor *)buttonRedTextColor;
+ (UIColor *)buttonRedTextColorSelected;
+ (UIColor *)buttonDarkGreenColor;
+ (UIColor *)buttonLightGreenColor;
+ (UIColor *)buttonDarkOrangeColor;
+ (UIColor *)buttonLightOrangeColor;
+ (UIColor *)buttonBlackColor;
+ (UIColor *)buttonWhiteColor;
+ (UIColor *)buttonLightGrayColor;
+ (UIColor *)buttonTextGrayColor;
+ (UIColor *)buttonBorderNormalGrayColor;
+ (UIColor *)buttonSummerFieldColor;
+ (UIColor *)buttonAbortRedColor;
+ (UIColor *)buttonDarkAbortRedColor;
+ (UIColor *)buttonLightAbortRedColor;
+ (UIColor *)hintProBackgroundColor;
+ (UIColor *)hintProTextColor;

+ (UIColor *)dumbBlue;
+ (UIColor *)whiteColor;
+ (UIColor *)blackColor;
+ (UIColor *)darkGreyColor;
+ (UIColor *)clearColor;
+ (UIColor *)groundGrayColor;
+ (UIColor *)lavenderGray;
+ (UIColor *)soboltGray;
+ (UIColor *)cobaltGray;
+ (UIColor *)tealGreen;
+ (UIColor *)coolGreen;
+ (UIColor *)paperColor;
+ (UIColor *)activeColor;
+ (UIColor *)actionColor;
+ (UIColor *)cloudColor;
+ (UIColor *)oldPaper;
+ (UIColor *)paleGrey;
+ (UIColor *)teleGrayDarkColor;
+ (UIColor *)teleGrayLightColor;

+ (UIColor *)rootBackgroundColor;

+ (UIColor *)panelContentSectiontColor;
+ (UIColor *)panelContentBorderColor;
+ (UIColor *)panelContentSectionHeaderColor;
+ (UIColor *)panelNavigationBorderColor;

+ (UIColor *)radioButtonGrayColor;
+ (UIColor *)radioButtonDarkGrayColor;
+ (UIColor *)radioButtonLightGrayColor;
+ (UIColor *)radioButtonGreenColor;

+ (UIColor *)textInputLightGrayColor;
+ (UIColor *)textInputGrayColor;
+ (UIColor *)textInputGreenColor;
+ (UIColor *)textInputDarkGreenColor;
+ (UIColor *)textInputLightGreenColor;
+ (UIColor *)textInputUnderscoreLineActiveColor;
+ (UIColor *)textInputPlaceholderGrayColor;
+ (UIColor *)textInputPlaceholderWhiteColor;
+ (UIColor *)textInputUnderscoreLineColor;
+ (UIColor *)textInputDisabledTextColor;
+ (UIColor *)textInputTitleColor;
+ (UIColor *)textInputDisabledTitleColor;
+ (UIColor *)textInputErrorTextColor;
+ (UIColor *)textInputErrorBackgroundColor;
+ (UIColor *)textInputWarningTextColor;
+ (UIColor *)textInputWarningBackgroundColor;

+ (UIColor *)textareaDisabledTextColor;
+ (UIColor *)textareaPlaceholderGrayColor;
+ (UIColor *)textareaPlaceholderWhiteColor;
+ (UIColor *)textareaBottomLineViewActiveColor;
+ (UIColor *)textareaBottomLineViewDefaultColor;

+ (UIColor *)tabSelectorDisabledTextColor;

+ (UIColor *)spinnerGreenAnimatedColor;
+ (UIColor *)spinnerGreenStaticColor;
+ (UIColor *)spinnerGrayAnimatedColor;
+ (UIColor *)spinnerGrayStaticColor;

+ (UIColor *)labelHeaderTextColor;
+ (UIColor *)labelTextTextColor;

+ (UIColor *)inputListLabelColor;
+ (UIColor *)breadcrumbActiveColor;
+ (UIColor *)breadcrumbBorderColor;

+ (UIColor *)horizontalRuleLineColor;

+ (UIColor *)panelAlertColor;
+ (UIColor *)panelErrorColor;

+ (UIColor *)comboBoxContentDarkOverlayColor;

+ (UIColor *)datePickerDisabledColor;
+ (UIColor *)dateInputActiveIconColor;

+ (UIColor *)hintIconPopoverBackgroundColor;
+ (UIColor *)hintIconPopoverFontColor;

+ (UIColor *)imageLoadingBackgroundColor;

+ (UIColor *)contentViewLoadApplicationsBackgroundColor;

+ (UIColor *)baseCellSubtitleTextColor;

@end
