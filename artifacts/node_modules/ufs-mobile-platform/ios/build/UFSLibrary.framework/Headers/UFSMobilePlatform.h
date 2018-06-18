//
//  UFSMobilePlatform.h
//  UFSPlatform
//
//  Created by Alexander Guschin on 03.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UFSMobilePlatform : NSObject

+ (void)initializeWithAppDelegate:(id<UIApplicationDelegate>)appDelegate
                    launchOptions:(NSDictionary *)launchOptions
                          devMode:(BOOL)enableDev;

@end

NS_ASSUME_NONNULL_END
