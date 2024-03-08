export default {
    SETTINGS: {
        GET_TOKEN_TIP: '使用eWeLink CUBE必须获取token，获取方式如下',
        STEP_1: 'Step 1: 点击“获取token”按钮',
        STEP_2: 'Step 2: 前往iHost中控台“获取凭证弹窗”的“确认”按钮',
        TIP_1: '当Homebridge未运行在iHost上时，可点击“IP查找iHost”按钮，输入IP来连接你去要获取token的iHost',
        TIP_2: '如果更换了iHost，需重新获取token，同时会清除已添加到Homebridge里的配件',
        STEP_1_NS_PANEL: 'Step 1: 点击“获取token”按钮',
        STEP_2_NS_PANEL: 'Step 2: 前往屏端的“设置 > 关于本机”连续点击“设备名称”7次',
        STEP_3_NS_PANEL: 'Step 3: 返回该页面',
        TIP_1_NS_PANEL: "若通过IP连接，当IP发生改变后需要通过“查找”按钮输入更换后的IP，连接成功后恢复使用",
        INVALID_TOKEN: 'token已失效，请重新获取token',
        INVALID_IP: 'IP无法访问，请点击“查找”按钮重新输入IP，连接成功后恢复正常使用',
        IP_UNABLE_TO_ACCESS: 'IP无法访问',
        GET_TOKEN: '获取 token',
        RE_GET_TOKEN: '重新获取',
        ALREADY_GET_TOKEN: '已获取 token',
        QUERY_IHOST: '查找IP',
        ADD_IHOST_PLACEHOLDER: '请输入要添加的iHost的IP',
        INPUT_NULL: '*IP不能为空',
        NOT_MATCH_IPV4: '*不符合ip格式',
        LINK_FAILED: '*IP连接失败',
        EXISTED_IP: '*IP已存在',
        LOG_FEAT: '日志中显示设备事件',
        LOG_DESC: '选中后将会在日志中记录设备事件更改',
        NET_ERROR: '网段错误'
    },
    DEVICES: {
        UNABLE_GET_DEVICE: '无法获取设备，请先获取token',
        CONFIG: '设备设置',
        TIP: '取消选中设备，设备将不会显示在 HomeKit',
        NO_DEVICE: '暂无设备',
        SWITCH: '开关插座',
        THERMOSTAT: '温控阀',
        LIGHT: '灯',
        SENSOR: '传感器',
        CURTAIN: '窗帘',
        OTHER_DEVICES: '其他设备',
        NO_SUPPORTED: '暂不支持'
    },
    CATEGORY: {
        PLUG: '插座',
        SWITCH: '开关',
        CURTAIN: '窗帘',
        LIGHT: '灯',
        WATER_DETECT: '水浸传感器',
        SMOKE_DETECT: '烟雾传感器',
        BUTTON: '无线按键',
        TEMP_HUM: '温湿度传感器',
        TEMP: '温度传感器',
        HUM: '湿度传感器',
        PIR_DETECT: 'PIR 传感器',
        DOOR_DETECT: '门磁',
        FAN_LIGHT: '风扇灯',
        THERMOSTAT: '温控阀'
    }
};
