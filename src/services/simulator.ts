import { EmergencyAlert, EmergencyContact } from '@/types';
export const seedContacts: EmergencyContact[] = [
 {id:'1',name:'Maya Sharma',relationship:'Mother',phone:'+91 98765 43210',priority:1,primary:true},
 {id:'2',name:'Arjun Sharma',relationship:'Brother',phone:'+91 98765 43120',priority:2,primary:false},
 {id:'3',name:'Rhea Kapoor',relationship:'Friend',phone:'+91 98765 43980',priority:3,primary:false}
];
export const seedAlerts: EmergencyAlert[] = [
 {id:'SG-1042',timestamp:'2026-07-27T18:42:00',latitude:28.6139,longitude:77.2090,status:'completed',contact:'Maya Sharma',message:'Emergency Alert! I need immediate help.',responseTime:42},
 {id:'SG-1041',timestamp:'2026-07-21T09:14:00',latitude:28.6214,longitude:77.2148,status:'completed',contact:'Arjun Sharma',message:'Emergency Alert! I need immediate help.',responseTime:36}
];
export const generateLocation = () => ({ latitude: Number((28.6139 + (Math.random()-.5)*.025).toFixed(6)), longitude:Number((77.2090 + (Math.random()-.5)*.025).toFixed(6)) });
export const buildMessage=(lat:number,lng:number)=>`Emergency Alert!\n\nI need immediate help.\n\nLocation:\nhttps://maps.google.com/?q=${lat},${lng}\n\nTime:\n${new Date().toLocaleString()}`;
