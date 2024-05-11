namespace Pond{
    interface Vector{
        x: number
        y: number
    }

    export class Stone {
        position: Vector// kann man as nicht aus der hauptdatei entnehmen?
        size: number
        type: string

        draw(){
            
        }
    }
}