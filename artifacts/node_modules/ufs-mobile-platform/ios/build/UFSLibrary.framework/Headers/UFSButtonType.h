//
//  UFSButtonDefinitionType.h
//  UFSPlatform
//
//  Created by Daniel Kalintsev on 22.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

static const NSInteger kUFSButtonTypeEnumCount = 10;

typedef NS_ENUM(NSInteger, UFSButtonType) {
	UFSButtonTypeDefault = 0,
	UFSButtonTypeOrange,
    UFSButtonTypeCallToAction,
	UFSButtonTypeAbortSession,
	UFSButtonTypeNarrow,
    UFSButtonTypeText,
    UFSButtonTypeTextRed,
    UFSButtonTypeIcon,
    UFSButtonTypeTextIcon,
	UFSButtonTypeUndefined
};
