#import "Bridge.h"

@implementation JSBridge

- (void)sendMessage:(NSString *)message {
    printf("我是来自jscore的消息: %s\n", [message UTF8String]);
}

@end
