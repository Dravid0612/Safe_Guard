export type AlertStatus = 'completed' | 'cancelled' | 'in-progress';
export interface EmergencyContact { id:string; name:string; relationship:string; phone:string; priority:number; primary:boolean; }
export interface EmergencyAlert { id:string; timestamp:string; latitude:number; longitude:number; status:AlertStatus; contact:string; message:string; responseTime:number; }
export interface DeviceStatus { gps:'Ready'|'Locating'; gsm:'Connected'|'Connecting'; battery:number; lastAlert:string; }
export type SosStage = 'idle'|'triggered'|'countdown'|'location'|'message'|'gsm'|'call'|'recording'|'complete'|'cancelled';
