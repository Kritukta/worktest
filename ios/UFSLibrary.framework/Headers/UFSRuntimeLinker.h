//
//  UFSRuntimeLinker.h
//  UFSPlatform
//
//  Created by Daniil Kalintsev on 02.11.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface UFSRuntimeLinker : NSObject

+ (void)setObject:(id)object
      forSelector:(SEL)selector
   inParentObject:(id)parentObject;

+ (void)setStrongObject:(id)object
            forSelector:(SEL)selector
         inParentObject:(id)parentObject;

+ (void)setWeakObject:(id)object
          forSelector:(SEL)selector
       inParentObject:(id)parentObject;

+ (id)getObjectForSelector:(SEL)selector
          fromParentObject:(id)parentObject;

@end

NS_ASSUME_NONNULL_END
