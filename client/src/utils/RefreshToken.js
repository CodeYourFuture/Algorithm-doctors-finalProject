export const RefreshTokenSetup = (res)=>{
    let refreshTiming =(res.tokenObj.expire_in||3600-5*60)*1000;

    const refreshToken = async()=>{
        const newAuthRes = await res.reloadAuthResoponses();
        refreshTiming=(newAuthRes.expire_in||3600-5*60)*1000;
        console.log("new auth Token", newAuthRes);

        setTimeout(refreshToken, refreshTiming);
    };
    setTimeout(refreshToken,refreshTiming);
};