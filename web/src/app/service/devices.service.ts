import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { PERROUTE } from './get-http.service';

export class WeatherData{
    area:string;
    temp:string;
    damp:string;
    quality:string;
    level:string;
    advice:string;
    default:boolean;
}
export const WEATHERDATA:WeatherData[] = [{
    'area': '--',
    'temp': '0',
    'damp': '0',
    'quality':'--',
    'level':'',
    'advice':'',
    'default':true,
}]

const AIR = [
    {'exponent':'0-50','level':'优','health_damage':'空气质量令人满意，基本无空气污染','suggestion':'各类人群可正常活动'},
    {'exponent':'51-100','level':'良','health_damage':'空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响','suggestion':'极少数异常敏感人群应减少户外活动'},
    {'exponent':'101-150','level':'轻度污染','health_damage':'易感人群症状有轻度加剧，健康人群出现刺激症状','suggestion':'儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼'},
    {'exponent':'151-200','level':'中度污染','health_damage':'进一步加剧易感人群症状，可能对健康人群心脏、呼吸系统有影响','suggestion':'儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼，一般人群适量减少户外运动'},
    {'exponent':'201-300','level':'重度污染','health_damage':'心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状','suggestion':'儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动'},
    {'exponent':'301-','level':'严重污染','health_damage':'健康人群运动耐受力降低，有明显强烈症状，提前出现某些疾病','suggestion':'儿童、老年人和病人应停留在室内，避免体力消耗，一般人群避免户外活动'}
]

export const ERROR = {
    error_other:{'overload':'超负荷告警','hight_exhaust_error':'排气过高告警','low_air':'送风温度过低告警','pump_error':'水泵故障告警','frost_proof':'防冻结保护告警'},
    error_temp: {'fresh_air':'新风(环温告警）','supply_air':'送风告警','return_gas':'回气告警','inner_tube':'内管温告警','out_tube':'外管温告警','in_air':'内换进风告警',
                  'inside_out_air':'内换出风告警','in_wind':'外换进风告警','exhaust':'排气告警','out_air':'外换出风告警','return_air':'回风告警'},
    error_monitor:{'temp':'温度故障告警','demp':'湿度故障告警','co':'CO2故障告警','o2':'O2故障告警','ch2o':'甲醛传感器故障告警','pm':'PM2.5传感器故障告警',
        'module':'主模通讯故障告警','remember':'记忆芯片故障告警','wifi':'与WIFI通信故障告警'},
    alarm:{'high_pressure':'高压告警','high_pressure_lock':'高压锁机告警(手动恢复)','low_pressure':'低压告警',
        'low_pressure_lock':'低压锁机告警(手动恢复)','low_line':'低水位告警','high_line':'高水位告警','fire':'火灾告警(手动恢复)',
        'thermal_overload_alarm':'电辅热过载告警','electric_lock':'电辅热锁定告警(手动恢复)','spe_electric_lock':'特殊电辅热锁定告警(手动恢复)'},
    alarm_other:{'phase_defect':'错相缺相告警','thermal_overload':'电辅热过载告警','primary_filter':'初效过滤报警',
        'medium_filter':'中效过滤报警','high_filter':'高效过滤报警','hight_exhaust':'排气过高告警','current_large':'电流过大告警'}
}

@Injectable()
export class DevicesService {
    constructor(private http: Http) {}
    // 我的设备--天气信息

    getWeatherData(){
        return WEATHERDATA[0]
    }

    updateWeatherData(data:any){
        let weather = this.getWeatherData();
        weather.area = data['city'];
        if(data['aqi']) {
            weather.temp = data['temp'];
            weather.damp = data['hum'];
            weather.quality = data['aqi'].toString();
            for(let i of AIR){
                let arr = i['exponent'].split('-')
                if(arr[1] == ''){
                    if (data['aqi'] >= parseInt(arr[0])){
                        weather.level = i['level'];
                        weather.advice = i['suggestion'];
                    }
                }else if(data['aqi'] >= parseInt(arr[0]) && data['aqi'] <= parseInt(arr[1])){
                    weather.level = i['level'];
                    weather.advice = i['suggestion'];
                }
            }
        }else{
            weather.quality = '暂无';
            weather.temp = '--';
            weather.damp = '--';
        }
        weather.default = false;
    }
}
