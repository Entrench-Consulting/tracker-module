import TagManager from 'react-gtm-module';


export class entrenchSdkCore {


    /**
     * SDK 초기화 함수
     **/
    static initialize(configuration){
        window.currentConfigurationForEntrench = configuration;

        // 1. GTM 서비스 초기화.
        TagManager.initialize({
            gtmId : configuration.gtmId,
            dataLayer:{
            }
        });
    }

    static getConfiguration(){
        return window.currentConfigurationForEntrench;
    }

    /**
     * sdk 의 부가 기능 구현 하기.
     ***/



}