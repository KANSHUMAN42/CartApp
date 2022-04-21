export default {
    port : 1337 , 
    dbUri: "mongodb://localhost:27017/cartapp",
    saltWorkFactor :10,
    accessTokenTtl : "15m", 
    refreshTokenTtl : "1y",
    publicKey :`-----BEGIN PUBLIC KEY-----
    MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGo6aiewGyXOeWJFdukBSVLKwbXC
    I326yNMC7ADHfvanrE+/XJrHioA76BJl1OW+bhDnWbkGGcQGAFLgSk0UfDEmgzLY
    fvVBt7GaC8M44Zwp0/ZYnOX5kjvzxk5bY08WcursvrBiqVLzi5EJe+Y/cO15dd5S
    P7MUCHvav4Otp7M9AgMBAAE=
    -----END PUBLIC KEY-----`,
    privateKey :`-----BEGIN RSA PRIVATE KEY-----
    MIICWgIBAAKBgGo6aiewGyXOeWJFdukBSVLKwbXCI326yNMC7ADHfvanrE+/XJrH
    ioA76BJl1OW+bhDnWbkGGcQGAFLgSk0UfDEmgzLYfvVBt7GaC8M44Zwp0/ZYnOX5
    kjvzxk5bY08WcursvrBiqVLzi5EJe+Y/cO15dd5SP7MUCHvav4Otp7M9AgMBAAEC
    gYBmq5raTR2QBuXPE3CAd9vUh19+Outuo89iExrjDe4qm5ixYzUv69hzZHNDBOUm
    QE3FTLWtXLYefeZmM53crgXxhBekS8ykOApF5WOiglf+7Wut92r0V7INZ7P/ihbk
    xyeliIaU2AK59DzF1Y2dNRWHvYUbtsYUnH7VsSMkV8X8wQJBAK4ZLsLPSZEEmgJD
    wvCqoV+/tnUPsErRkhvHCClywpqT57UC0Ex/zQ7X4Gc1lGwl8s61lrmEAKwc4WNL
    yIoSjpUCQQCcM5EMWLA0uAwf1HMSAeadxe1AOH3ctBTp3P0diUBTHUpEewC9a2aE
    2XprT9KBbJn/NUDdJkA4v+Oijk9zwfAJAkAXRrKjxQb25oCYsOqNNqLgpEcGm5Rc
    TGyWXiPPNtKhzAh8gOXMdIG77EzKP7WaR/CQhmKiZu2YFTxlBCrJmvWJAkA7dEFE
    csl294rd3q6B7ylJalnYtOfrRrwjG9NYF7LdL+vhzvPEJYobDPBUwkg8rQqcojdz
    NakCML/DUumZBPuJAkBMiAWkvpjV4yT2EoKukT7pHhcCQIHS3G3Y/jwNvrwvAnhQ
    Qk/yEYixVjTPsiEW/1970GUBc+XF32N1sNhvz2la
    -----END RSA PRIVATE KEY-----`

}