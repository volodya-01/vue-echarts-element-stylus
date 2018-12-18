// �б�ʱ��ת������ (��HTMLҳ���ģ����ʹ��)
const  formatTime = (timeStrap) => {
    var cusDate=timeStrap;
    var outputTime=null;

    var nowDate=new Date();  // ��������
    var oDate=new Date(cusDate);//.Format("yyyy-MM-dd HH:mm:ss"); ��ȡ��ʱ��

    if( nowDate.getMonth() != oDate.getMonth() ){ // ���ڵ�ǰ�·�
        outputTime=oDate.Format("MM��dd��");
    }else{
        if(parseInt(nowDate.getDate())>parseInt(oDate.getDate())){
            outputTime=oDate.Format("MM��dd��");
        }else{
            // outputTime=oDate.Format("hh:mm");
            outputTime='����';
        }
    }
    return outputTime;//+"+"+nowDate.getDate()+"+"+oDate.getDate()+"+"+nowDate.getMonth()+"+"+oDate.getMonth()+"+"+cusDate;
}


/*��ʽ��ʱ��*/
Date.prototype.Format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //�·�
      "d+": this.getDate(), //��
      "h+": this.getHours(), //Сʱ
      "m+": this.getMinutes(), //��
      "s+": this.getSeconds(), //��
      "q+": Math.floor((this.getMonth() + 3) / 3), //����
      "S": this.getMilliseconds() //����
  };
  if (/(y+)/.test(fmt)){fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));}
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


// ������λС��
const tofix = (num) => {
    return Math.round(num*100)/100;
}

// ����ȡ��ֵ��Ϊ���飬������붺��
const arrJoin = (val) => {
  Object.keys(val).map(function(k){
    return val[k] = val[k]['grape_ch']
  });
  return val.join('��');
}

// ��ȡ���ڼ�
const getDay = (date) => {
  let dateArr=date.split('-')
  let setdate=new Date(dateArr[0],parseInt(dateArr[1]-1),dateArr[2])
  let day = "��һ����������".charAt(setdate.getDay())
  return `${date} ${day}`  //���ڼ�
}

/**
 * @Author   jok
 * @DateTime 2018-01-16T18:02:48+0800
* percentKeys": {
*  "indexKey": "glancedetailUV",
*  "subKey": "clickbuyUV"
* }
*/
const getPercentData = (row, percentKeys) => {
  let percentFloat = row[percentKeys.subKey]/row[percentKeys.indexKey]*100;
  return ` / ${percentFloat.toFixed(1)}%`
}


const getOnlyPercentData = (row, percentKeys) => {
  let percentFloat = row[percentKeys.subKey]/row[percentKeys.indexKey]*100;
  return `${percentFloat.toFixed(1)}%`
}

// ���������
const getTableColumn = (row, dataKeys) => {
  let columnStrigArr = []
  for(let i of dataKeys) {
    columnStrigArr.push(row[i])
  }
  return columnStrigArr.join(' / ')
}

export{tofix, formatTime, arrJoin, getDay, getPercentData, getOnlyPercentData, getTableColumn}
