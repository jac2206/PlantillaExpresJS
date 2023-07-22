import path from 'path';
import { fileURLToPath } from 'url';
import {throwCustomPco, getCustomPcoException} from '../../domain/entities/custom-exception-entity';

export const getDirName = (moduleUrl) => {
  const filename = fileURLToPath(moduleUrl);
  return path.dirname(filename);
};

export const generateLocationCode=async(locationCode)=>{
  if(locationCode.length > 10){throw getCustomPcoException({resultCode: 'Error', resultMsg: 'Codigo enviado supera el tamaño maximo'});}
  const regex = /(\d+)/g;
  const consecutivoAnterior = locationCode.match(regex).toString();
  let code = locationCode.split(parseInt(locationCode.match(regex)))[0];
  const consecutivo = parseInt(locationCode.match(regex))+1;
  let newLocationCode = code.concat(consecutivo.toString());
  if(newLocationCode.length < 11){
    return newLocationCode;
  }
  else{
    const regexCero = /^0+/;
    const cantidadCerosConsecutivo = consecutivoAnterior.match(regexCero) === null ? 0 : consecutivoAnterior.match(regexCero)[0].length;
    // if(cantidadCerosConsecutivo > 0){
    //   code = code.slice(0,-cantidadCerosConsecutivo);
    // }
    code = code.replace(/[0-9]/g,'');
    newLocationCode = code.concat('0'.repeat(cantidadCerosConsecutivo+1).concat('1')); //
    if(newLocationCode.length > 10){
      throw throwCustomPco('No se puede generar location. Ya creaste el máximo');
    }
    return newLocationCode;
  }
};