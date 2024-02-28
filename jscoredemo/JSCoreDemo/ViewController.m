#import "ViewController.h"
#import "Bridge/Bridge.h"

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self initJSCore];
}

- (void)initJSCore {
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"core" ofType:@"js"];
    NSString *fileContent = [NSString stringWithContentsOfFile:filePath encoding:NSUTF8StringEncoding error:nil];
    JSContext *ctx = [[JSContext alloc] init];
    JSBridge *bridge = [[JSBridge alloc] init];
    
    [ctx setObject:bridge forKeyedSubscript:@"bridge"];
    [ctx evaluateScript:fileContent];
    
    JSValue *sendMessage = ctx[@"receiveNativeMessage"];
    [sendMessage callWithArguments:@[@"我是来自native的消息"]];
}

@end
