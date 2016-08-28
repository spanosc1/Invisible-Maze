$(document).ready(function(){
    function leftArrowPressed() {
        var element = document.getElementById("image1");
        if(Maze[currentPositionY][currentPositionX].left)
        {
            element.style.left = parseInt(element.style.left) - 50 + 'px';
            currentPositionX--;
            if(currentPositionX == 11 && currentPositionY == 11)
            {
                window.setTimeout(youWin, 100);
            }
        }
    };
    function rightArrowPressed() {
        var element = document.getElementById("image1");
        if(Maze[currentPositionY][currentPositionX].right)
        {
            element.style.left = parseInt(element.style.left) + 50 + 'px';
            currentPositionX++;
            console.log(currentPositionX == 11);
            if(currentPositionX == 11 && currentPositionY == 11)
            {
                window.setTimeout(youWin, 100);
            }
        }
    };
    function upArrowPressed() {
        var element = document.getElementById("image1");
        if(Maze[currentPositionY][currentPositionX].up)
        {
            element.style.top = parseInt(element.style.top) - 50 + 'px';
            currentPositionY--;
            if(currentPositionX == 11 && currentPositionY == 11)
            {
                window.setTimeout(youWin, 100);
            }
        }
    };
    function downArrowPressed() {
        var element = document.getElementById("image1");
        if(Maze[currentPositionY][currentPositionX].down)
        {
            element.style.top = parseInt(element.style.top) + 50 + 'px';
            currentPositionY++;
            if(currentPositionX == 11 && currentPositionY == 11)
            {
                window.setTimeout(youWin, 100);
            }
        }
    };
    function youWin() {
        alert("You win!");
        var element = document.getElementById("image1");
        element.style.left = 0;
        element.style.top = 0;
        currentPositionX = 0;
        currentPositionY = 0;
    }
    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
                leftArrowPressed();
                break;
            case 39:
                rightArrowPressed();
                break;
            case 38:
                upArrowPressed();
                break;
            case 40:
                downArrowPressed();
                break;
        }
    };
    window.addEventListener('keydown', moveSelection);

    var currentPositionX = 0;
    var currentPositionY = 0;
    var Zero = {
        down: false,
        up: false,
        right: false,
        left: false
    };
    var One = {
        down: true,
        up: false,
        right: false,
        left: false
    };
    var Two = {
        down: false,
        up: true,
        right: false,
        left: false
    };
    var Three = {
        down: true,
        up: true,
        right: false,
        left: false 
    };
    var Four = {
        down: false,
        up: false,
        right: true,
        left: false
    };
    var Five = {
        down: true,
        up: false,
        right: true,
        left: false
    };
    var Six = {
        down: false,
        up: true,
        right: true,
        left: false
    };
    var Seven = {
        down: true,
        up: true,
        right: true,
        left: false
    };
    var Eight = {
        down: false,
        up: false,
        right: false,
        left: true
    };
    var Nine = {
        down: true,
        up: false,
        right: false,
        left: true
    };
    var Ten = {
        down: false,
        up: true,
        right: false,
        left: true
    };
    var Eleven = {
        down: true,
        up: true,
        right: false,
        left: true
    };
    var Twelve = {
        down: false,
        up: false,
        right: true,
        left: true
    };
    var Thirteen = {
        down: true,
        up: false,
        right: true,
        left: true
    };
    var Fourteen = {
        down: false,
        up: true,
        right: true,
        left: true
    };
    var Fifteen = {
        down: true,
        up: true,
        right: true,
        left: true
    };
    var Maze = [];
    var Row = [];
    var Key = [ [5, 13, 9, 4, 13, 12, 13, 8, 4, 12, 13, 9],
                [2, 2, 3, 5, 15, 8, 2, 4, 12, 9, 3, 3],
                [4, 13, 10, 2, 6, 12, 13, 12, 13, 14, 10, 3],
                [4, 14, 9, 4, 13, 8, 7, 8, 2, 4, 13, 10],
                [1, 1, 3, 4, 11, 4, 10, 1, 5, 9, 2, 1],
                [7, 15, 10, 5, 15, 14, 9, 6, 11, 2, 1, 3],
                [3, 2, 1, 3, 2, 1, 6, 12, 11, 1, 7, 11],
                [3, 4, 14, 14, 8, 6, 9, 1, 3, 3, 2, 3],
                [7, 13, 12, 8, 4, 9, 7, 10, 3, 3, 4, 11],
                [2, 6, 13, 9, 5, 14, 15, 8, 3, 3, 1, 3],
                [1, 4, 10, 6, 11, 1, 3, 1, 7, 15, 14, 11],
                [6, 12, 12, 12, 14, 10, 6, 14, 10, 6, 8, 2]];
    for(var i = 0; i < Key.length; i++)
    {
        for(var j = 0; j < Key[i].length; j++)
        {
            switch(Key[i][j]) {
                case 0:
                    Row.push(Zero);
                    break;
                case 1:
                    Row.push(One);
                    break;
                case 2:
                    Row.push(Two);
                    break;
                case 3:
                    Row.push(Three);
                    break;
                case 4:
                    Row.push(Four);
                    break;
                case 5:
                    Row.push(Five);
                    break;
                case 6:
                    Row.push(Six);
                    break;
                case 7:
                    Row.push(Seven);
                    break;
                case 8:
                    Row.push(Eight);
                    break;
                case 9:
                    Row.push(Nine);
                    break;
                case 10:
                    Row.push(Ten);
                    break;
                case 11:
                    Row.push(Eleven);
                    break;
                case 12:
                    Row.push(Twelve);
                    break;
                case 13:
                    Row.push(Thirteen);
                    break;
                case 14:
                    Row.push(Fourteen);
                    break;
                case 15:
                    Row.push(Fifteen);
                    break;
            }
        }
        Maze.push(Row);
        Row = [];
    }
    console.log(Maze);
});