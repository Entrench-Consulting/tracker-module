import { entrenchSdkCore } from "./entrenchSdkCore";
export class entrenchSdk {
    /**
     * 이곳의 소스는 entrenchSdkCore.js 에서 제공하는 함수와 일치해야 합니다.
     * 지금 보는 파일은 절대 개별적으로 수정하지 말고, entrenchSdkCore.js 에서 구현한 함수를 그대로 호출하도록만 구현하는 것을 권장합니다.
     ***/

    // 초기화 함수
    initialize(configuration){
        entrenchSdkCore.initialize(configuration);
    }
    getConfiguration(){
        return entrenchSdkCore.getConfiguration();
    }


}
window.entrenchSdk = new entrenchSdk();