(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{505:function(e){e.exports=JSON.parse('[{"name":"Set scan RSSI limit","value":"01","help":"1 ... 255 used for wifi and bluetooth scan radius (greater values increase scan radius, values 50...110 make sense)\\n 0 = RSSI limiter disabled [default]","parameters":{"type":"number","min":0,"max":255,"default":0}},{"name":"set counter mode","value":"02","help":"0 = cyclic unconfirmed, mac counter reset after each wifi scan cycle, data is sent only once [default]\\n 1 = cumulative counter, mac counter is never reset\\n 2 = cyclic confirmed, like 0 but data is resent until confirmation by network received","parameters":{"type":"list","list":[{"name":"cyclic unconfirmed","value":"00"},{"name":"cumulative counter","value":"01"},{"name":"cyclic confirmed","value":"02"}]}},{"name":"set GPS data on/off","value":"03","help":"0 = GPS data off\\n 1 = GPS data on, sends GPS data on port 4 (default, use port 1 for mobile pax counter), if GPS is present and has a fix","parameters":{"type":"list","list":[{"name":"GPS data off","value":"00"},{"name":"GPS data on","value":"01"}]}},{"name":"set display on/off","value":"04","help":"0 = display off\\n1 = display on [default]","parameters":{"type":"list","list":[{"name":"display off","value":"00"},{"name":"display on [default]","value":"01"}]}},{"name":"set LoRa datarate","value":"05","help":"0 ... 15 see LoRaWAN regional parameters for details [default: 5]\\n\\nExample for EU868:\\n\\nDataRate\\tConfiguration Bit/s\\n0\\t\\tLoRa: SF12 / 125 kHz\\t250\\n1\\t\\tLoRa: SF11 / 125 kHz\\t440\\n2\\t\\tLoRa: SF10 / 125 kHz\\t980\\n3\\t\\tLoRa: SF9 / 125 kHz\\t1760\\n4\\t\\tLoRa: SF8 / 125 kHz\\t3125\\n5\\t\\tLoRa: SF7 / 125 kHz\\t5470\\n6*\\t\\tLoRa: SF7 / 250 kHz\\t11000\\n7*\\t\\tFSK: 50 kbps\\t\\t50000\\n8 .. 14\\t\\treserved for future use (RFU)\\n15\\t\\tignored (device keeps current setting)\\n\\n*) not supported by TheThingsNetwork","parameters":{"type":"list","list":[{"name":"LoRa: SF12 / 125 kHz","value":"00"},{"name":"LoRa: SF11 / 125 kHz","value":"01"},{"name":"LoRa: SF10 / 125 kHz","value":"02"},{"name":"LoRa: SF9 / 125 kHz","value":"03"},{"name":"LoRa: SF8 / 125 kHz","value":"04"},{"name":"LoRa: SF7 / 125 kHz","value":"05"},{"name":"LoRa: SF7 / 250 kHz","value":"06"},{"name":"FSK: 50 kbps","value":"07"},{"name":"reserved for future use (RFU)","value":"08"},{"name":"reserved for future use (RFU)","value":"09"},{"name":"reserved for future use (RFU)","value":"10"},{"name":"reserved for future use (RFU)","value":"11"},{"name":"reserved for future use (RFU)","value":"12"},{"name":"reserved for future use (RFU)","value":"13"},{"name":"reserved for future use (RFU)","value":"14"},{"name":"ignored (device keeps current setting)","value":"15"}]}},{"name":"set LoRa TX power","value":"06","help":"0 ... 255 desired TX power in dBm [default: 14]"},{"name":"set LoRa Adaptive Data Rate mode","value":"07","help":"0 = ADR off\\n1 = ADR on [default]\\nIf ADR is set to off, SF value is shown inverted on display.","parameters":{"type":"list","list":[{"name":"ADR off","value":"00"},{"name":"ADR on [default]","value":"01"}]}},{"name":"do nothing","value":"08","help":"useful to clear pending commands from LoRaWAN server quere, or to check RSSI on device"},{"name":"reset functions (send this command UNconfirmed only to avoid boot loops!)","value":"09","help":"0 = restart device (coldstart)\\n1 = (reserved, currently does nothing)\\n2 = reset device to factory settings and restart device\\n3 = flush send queues\\n4 = restart device (warmstart)\\n8 = reboot device to maintenance mode (local web server)\\n9 = reboot device to OTA update via Wifi mode","parameters":{"type":"list","list":[{"name":"restart device (coldstart)","value":"00"},{"name":"(reserved, currently does nothing)","value":"01"},{"name":"reset device to factory settings and restart device","value":"02"},{"name":"flush send queues","value":"03"},{"name":"restart device (warmstart)","value":"04"},{"name":"reboot device to maintenance mode (local web server)","value":"08"},{"name":"reboot device to OTA update via Wifi mode","value":"09"}]}},{"name":"set payload send cycle","value":"0A","help":"5 ... 255 payload send cycle in seconds/2\\n e.g. 120 -> payload is transmitted each 240 seconds [default]","parameters":{"type":"number","min":5,"max":255,"step":1,"default":120}},{"name":"set Wifi channel hopping interval timer","value":"0B","help":"0 ... 255 duration for scanning a wifi channel in seconds/100\\ne.g. 50 -> each channel is scanned for 500 milliseconds [default]\\n0 means no hopping, scanning on fixed single channel WIFI_CHANNEL_1","parameters":{"type":"number","min":0,"max":255,"step":1,"default":0}},{"name":"set Bluetooth channel switch interval timer","value":"0C","help":"0 ... 255 duration for scanning a bluetooth advertising channel in seconds/100\\ne.g. 8 -> each channel is scanned for 80 milliseconds [default]","parameters":{"type":"number","min":0,"max":255,"step":1,"default":8}},{"name":"set Bluetooth scanner","value":"0E","help":"0 = disabled\\n 1 = enabled [default]","parameters":{"type":"list","list":[{"name":"disabled","value":"00"},{"name":"enabled [default]","value":"01"}]}},{"name":"set WIFI antenna switch (works on LoPy/LoPy4/FiPy only)","value":"0F","help":"0 = internal antenna [default]\\n 1 = external antenna","parameters":{"type":"list","list":[{"name":"internal antenna [default]","value":"00"},{"name":"external antenna","value":"01"}]}},{"name":"set RGB led luminosity (works on LoPy/LoPy4/FiPy and LoRaNode32 shield only)","value":"10","help":"0 ... 100 percentage of luminosity (100% = full light)\\ne.g. 50 -> 50% of luminosity [default]","parameters":{"type":"number","min":0,"max":100,"step":1,"default":50}},{"name":"set user sensor mode","value":"13","help":"byte 1 = user sensor number (1..3)\\nbyte 2 = sensor mode (0 = disabled / 1 = enabled [default])","parameters":{"type":"list","list":[{"name":"user sensor 1","value":"0101"},{"name":"user sensor 2","value":"0201"},{"name":"user sensor 3","value":"0301"}]}},{"name":"set payload mask","value":"14","help":"byte 1 = sensor data payload mask (0..255, meaning of bits see below)\\n0x01 = COUNT_DATA\\n0x02 = RESERVED_DATA\\n0x04 = MEMS_DATA\\n0x08 = GPS_DATA\\n0x10 = SENSOR_1_DATA\\n0x20 = SENSOR_2_DATA\\n0x40 = SENSOR_3_DATA\\n0x80 = BATT_DATA\\nbytes can be combined eg COUNT_DATA + SENSOR_1_DATA + BATT_DATA: `0x01 | 0x10 | 0x80 = 0x91","parameters":{"type":"list","list":[{"name":"COUNT_DATA","value":"01"},{"name":"RESERVED_DATA","value":"02"},{"name":"MEMS_DATA","value":"04"},{"name":"GPS_DATA","value":"08"},{"name":"SENSOR_1_DATA","value":"10"},{"name":"SENSOR_2_DATA","value":"20"},{"name":"SENSOR_3_DATA","value":"40"},{"name":"BATT_DATA","value":"80"}]}},{"name":"set BME data on/off","value":"15","help":"0 = BME data off\\n1 = BME data on, sends BME data on port 7 [default]","parameters":{"type":"list","list":[{"name":"BME data off","value":"00"},{"name":"BME data on, sends BME data on port 7 [default]","value":"01"}]}},{"name":"set battery data on/off","value":"16","help":"0 = battery data off [default]\\n1 = battery data on, sends voltage on port 8","parameters":{"type":"list","list":[{"name":"battery data off [default]","value":"00"},{"name":"battery data on, sends voltage on port 8","value":"01"}]}},{"name":"set Wifi scanner","value":"17","help":"0 = disabled\\n1 = enabled [default]","parameters":{"type":"list","list":[{"name":"disabled","value":"00"},{"name":"enabled [default]","value":"01"}]}},{"name":"reserved","value":"18","help":"unused, does nothing"},{"name":"set sleep cycle","value":"19","help":"bytes 1..2 = device sleep cycle in seconds/10 (MSB), 1 ... 255\\ne.g. {0x04, 0xB0} -> device sleeps 20 minutes after each send cycle [default = 0]","parameters":{"type":"number","min":0,"max":65535,"step":1,"default":1200}},{"name":"load device configuration","value":"20","help":"Current device runtime configuration will be loaded from NVRAM, replacing current settings immediately (use with care!)"},{"name":"store device configuration","value":"21","help":"Current device runtime configuration is stored in NVRAM, will be reloaded after restart"},{"name":"get device configuration","value":"80","help":"Device answers with it\'s current configuration on Port 3."},{"name":"get device status","value":"81","help":"Device answers with it\'s current status on Port 2."},{"name":"get battery status","value":"83","help":"Device answers with battery voltage on Port 8."},{"name":"get device GPS status","value":"84","help":"Device answers with it\'s current status on Port 4."},{"name":"get BME280 / BME680 sensor data","value":"85","help":"Device answers with BME sensor data set on Port 7."},{"name":"get time/date","value":"86","help":"Device answers with it\'s current time on Port 2:\\nbytes 1..4 = time/date in UTC epoch seconds (LSB)\\nbyte 5 = time source & status, see below\\n   bits 0..3 time source\\n0x00 = GPS\\n0x01 = RTC\\n0x02 = LORA\\n0x03 = unsynched\\n0x04 = set (source unknown)\\n    bits 4..7 esp32 sntp time status\\n0x00 = SNTP_SYNC_STATUS_RESET\\n0x01 = SNTP_SYNC_STATUS_COMPLETED\\n0x02 = SNTP_SYNC_STATUS_IN_PROGRESS"},{"name":"set time/date","value":"88","help":"bytes 1..4 = time/date to set in UTC epoch seconds (MSB, e.g. https://www.epochconverter.com/hex)"}]')},514:function(e,t,n){"use strict";n.r(t);var r=n(513),o=n(397),l=n(407),d=n(400),m=n(395),c=n(510),v=n(512),f=n(511),h=n(509),y=n(380),S=n(394),_=n(421),x=n(401),A=(n(469),n(7),n(471),n(478),n(480),n(481),n(482),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(494),n(495),n(496),n(497),n(498),n(499),n(500),n(501),n(502),n(503),n(504),n(62),n(29),n(157),n(505)),R={data:function(){return{output:"",selectedCommand:null,selectedParameter:null,commands:A,format:"HEX"}},methods:{updateCommand:function(){if(this.output=this.selectedCommand.value,this.selectedCommand.parameters&&"list"==this.selectedCommand.parameters.type){var e;this.selectedParameter=this.selectedCommand.parameters.list[0];var t=null!==(e=this.selectedParameter.value)&&void 0!==e?e:this.selectedParameter;this.output=this.selectedCommand.value+t}},updateParameter:function(){var e,t=null!==(e=this.selectedParameter.value)&&void 0!==e?e:this.selectedParameter;this.output=this.selectedCommand.value+t},hexToBase64:function(e){if("HEX"==this.format){var t=new Uint8Array(e.match(/[\da-f]{2}/gi).map((function(e){return parseInt(e,16)})));this.output=btoa(String.fromCharCode.apply(String,Object(x.a)(t))),this.format="BASE64"}},convert:function(e){"HEX"==e?this.output=this.hexToBase64(this.output):"BASE64"==e&&(this.output=btoa(this.output))},copyToClipboard:function(text){navigator.clipboard.writeText(text)}}},P=n(101),component=Object(P.a)(R,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"mx-auto",attrs:{"max-width":"700"}},[t(d.d,[e._v(" Paxcounter Remote Commands Helper ")]),e._v(" "),t(d.c,[t(S.a,{attrs:{dense:""}},[t(m.a,{attrs:{cols:"12"}},[t(l.a,{attrs:{color:"paxcounter",dark:""}},[t("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[t("div",[t(d.d,{staticClass:"text-h5"},[e._v(" ESP32-Paxcounter")]),e._v(" "),t(d.b,[e._v(" Unofficial helper for the Paxcounter project to create remote\n                commands")]),e._v(" "),t(d.a,[t(o.a,{attrs:{text:"",href:"https://github.com/cyberman54/ESP32-Paxcounter",target:"_blank"}},[e._v("\n                  GitHub"),t(y.a,{attrs:{right:"",dark:""}},[e._v(" mdi-github")])],1),e._v(" "),t(o.a,{attrs:{text:"",href:"https://cyberman54.github.io/ESP32-Paxcounter/",target:"_blank"}},[e._v("\n                  Documentation"),t(y.a,{attrs:{right:"",dark:""}},[e._v(" mdi-book")])],1)],1)],1)])])],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{attrs:{color:"paxcounter",dark:""}},[t(d.d,{staticClass:"text-h5"},[e._v(" Select a command ")]),e._v(" "),t(d.c,[t(r.a,{attrs:{items:e.commands,label:"Start typing here ...","item-text":"name",outlined:"",dense:"","return-object":""},on:{change:e.updateCommand},model:{value:e.selectedCommand,callback:function(t){e.selectedCommand=t},expression:"selectedCommand"}}),e._v(" "),e.selectedCommand&&e.selectedCommand.parameters?["list"==e.selectedCommand.parameters.type?[t(r.a,{attrs:{items:e.selectedCommand.parameters.list,label:"Select Parameter","item-text":"name",outlined:"",dense:"","return-object":""},on:{change:e.updateParameter},model:{value:e.selectedParameter,callback:function(t){e.selectedParameter=t},expression:"selectedParameter"}})]:"number"==e.selectedCommand.parameters.type?[t(_.a,{attrs:{label:"Select Parameter",outlined:"",dense:"",type:"number",min:"0",max:"100"},on:{change:e.updateParameter},model:{value:e.selectedParameter,callback:function(t){e.selectedParameter=t},expression:"selectedParameter"}})]:e._e()]:e._e(),e._v(" "),t(h.a,[t(c.a,[t(f.a,{attrs:{color:"info"}},[e._v(" Help ")]),e._v(" "),e.selectedCommand?t(v.a,{attrs:{color:"info"}},[t(d.c,{staticClass:"text-pre-wrap",domProps:{innerHTML:e._s(e.selectedCommand.help)}})],1):e._e()],1)],1)],2)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{attrs:{color:"paxcounter",dark:""}},[t(d.d,{staticClass:"text-h5"},[e._v(" Output ")]),e._v(" "),t(d.c,[t(_.a,{attrs:{outlined:!0,"hide-details":!0},model:{value:e.output,callback:function(t){e.output=t},expression:"output"}})],1),e._v(" "),t(d.a,[t(o.a,{attrs:{color:"error"},on:{click:function(t){e.output=""}}},[e._v("Clear")]),e._v(" "),t(o.a,{attrs:{color:"primary"},on:{click:function(t){return e.convert("HEX")}}},[e._v("HEX")]),e._v(" "),t(o.a,{attrs:{color:"primary"},on:{click:function(t){return e.convert("BASE64")}}},[e._v("BASE64")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);