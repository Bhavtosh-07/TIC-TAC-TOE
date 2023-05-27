let boxes=Array.from(document.querySelectorAll('.grid-item'));

// true for human and false for computer
let current_player=true;

let visited_list=[];
for (let i = 0; i < 9; i++) {
    visited_list = [...visited_list, false];
}
// check here
refresh=()=>
{
    let con = confirm("Do you want to restart")
    if(con == 1)
    {
        window.location.reload();
    }
}
check_valid_box=(idx)=>
{
    if(visited_list[idx] === 'X' || visited_list[idx] === 'O')
    {
        return true;
    }
    else
        return false;
}
reset_game=(current_player)=>
{
    document.getElementsByClassName("after-win")[0].innerHTML=
    `
    <marquee behavior="scroll" direction="right" class="win-box" scrollamount="15">
    Congrats player-${current_player === true?1:2} wins
    </marquee>
    `
    setInterval(() => {
        window.location.reload();
    }, 4500);
}
mark_turn=(current_player,box_id)=>
{
    console.log(current_player);

    if(current_player == true)// it means it is human put a cross
    {
        document.getElementById(box_id).innerHTML=`<span class="cross">X</span>`;
        
    }
    else// it means it is computer put a circle
    {
        document.getElementById(box_id).innerHTML=`<span class="circle">O</span>`;
    }
}

row_1_check=()=>
{
    if(visited_list[0] == 'X' && visited_list[1] == 'X' && visited_list[2] == 'X')
        return true;
    else if(visited_list[0] == 'O' && visited_list[1] == 'O' && visited_list[2] == 'O')
        return true;
    else
        return false;
}
row_2_check=()=>
{
    if(visited_list[3] == 'X' && visited_list[4] == 'X' && visited_list[5] == 'X')
        return true;
    else if(visited_list[3] == 'O' && visited_list[4] == 'O' && visited_list[5] == 'O')
        return true;
    else
        return false;
}
row_3_check=()=>
{
    if(visited_list[6] == 'X' && visited_list[7] == 'X' && visited_list[8] == 'X')
        return true;
    else if(visited_list[6] == 'O' && visited_list[7] == 'O' && visited_list[8] == 'O')
        return true;
    else
        return false;
}
col_1_check=()=>
{
    if(visited_list[0] == 'X' && visited_list[3] == 'X' && visited_list[6] == 'X')
        return true;
    else if(visited_list[0] == 'O' && visited_list[3] == 'O' && visited_list[6] == 'O')
        return true;
    else
        return false;
}
col_2_check=()=>
{
    if(visited_list[1] == 'X' && visited_list[4] == 'X' && visited_list[7] == 'X')
        return true;
    else if(visited_list[1] == 'O' && visited_list[4] == 'O' && visited_list[7] == 'O')
        return true;
    else
        return false;
}
col_3_check=()=>
{
    if(visited_list[2] == 'X' && visited_list[5] == 'X' && visited_list[8] == 'X')
        return true;
    else if(visited_list[2] == 'O' && visited_list[5] == 'O' && visited_list[8] == 'O')
        return true;
    else
        return false;
}
diag_1_check=()=>
{
    if(visited_list[0] == 'X' && visited_list[4] == 'X' && visited_list[8] == 'X')
        return true;
    else if(visited_list[0] == 'O' && visited_list[4] == 'O' && visited_list[8] == 'O')
        return true;
    else
        return false;
}
diag_2_check=()=>
{
    if(visited_list[2] == 'X' && visited_list[4] == 'X' && visited_list[6] == 'X')
        return true;
    else if(visited_list[2] == 'O' && visited_list[4] == 'O' && visited_list[6] == 'O')
        return true;
    else
        return false;
}
check_win=()=>
{
    if(row_1_check() == true)
    {
        return true;
    }
    else if(row_2_check() == true)
    {
        return true;    
    }
    else if(row_3_check() == true)
    {
        return true;    
    }
    else if(col_1_check() == true)
    {
        return true;    
    }
    else if(col_2_check() == true)
    {
        return true;    
    }
    else if(col_3_check() == true)
    {
        return true;    
    }
    else if(diag_1_check() == true)
    {
        return true;    
    }
    else if(diag_2_check() == true)
    {
        return true;    
    }
    else
    {
        console.log("nothing")
    }
}
call_event=()=>
{
    boxes.forEach((ele)=>
    {
        ele.addEventListener('click',(e)=>
        {
            let id=(e.target.id);
            // console.log(e.target.id);
            let box_num=parseInt(id[id.length-1]);
            // console.log(box_num,typeof(box_num));

            // before doing this check if the box was not visited earlier
            if( check_valid_box(box_num-1) == true)//it means already visited
            {
                //change this to alert
                console.log("Do something else")
                console.log(visited_list)
                // return;
            }
            else
            {
                current_player == true ?visited_list[box_num-1]='X':visited_list[box_num-1]='O';
                //now call the mark_position of the box
                mark_turn(current_player,id);
                // check for win_condition
                if(check_win() == true)
                {
                    reset_game(current_player);
                }
                
                current_player === true?current_player=false:current_player=true;
                // console.log(visited_list)
                // return;
            }

        })
    })
}


call_event();

