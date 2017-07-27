import {Pipe} from 'angular2/core';

@Pipe({
    name:'find'
})

export class SearchPipe {
    transform(pipeData, [pipeModifier]) {
        return pipeData.filter(eachItem => {
            return eachItem['clientName'].toLowerCase().includes(pipeModifier.toLowerCase()) || eachItem['policyNo'].toLowerCase().includes(pipeModifier.toLowerCase());
        })
    }
}