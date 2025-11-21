*-----------------------------------------------------------
* Title      : polling
* Written by : Syed Maroof Hussain
* Date       : 11-19-2025
* Description: polling
* Section    : 0102
*-----------------------------------------------------------
* I have exclusive control over this submission via my password.
* By including this statement in this header, I certify that
* I have read and understood the University policy in academic
* integrity and I assert that this work is my own. I have
* not used any unapproved external resources including LLM
* models. Furthermore, I certify that is assignment was
* prepared by me specifically for this course.

HARDWARE    EQU $E00000
    ORG    $1000
START:                  ; first instruction of program
    
    ; display hardware window
    MOVE #32, D0
    CLR.L D1
    TRAP #15
    LEA HARDWARE, A1
    CLR.B $10(A1)   ; all 8 leds off initially
    
LOOP:

    MOVE.B $12(A1), D2  ; stores the switches value into d2

POLL:

    MOVE.B $14(A1), D1 ; move state of buttons into d1
    AND.B #%10000000, D1 ; grab only the 7th bit of the buttons
    CMP.B #%00000000, D1 ; check if pushed or not, 0 -> pressed, !0 -> not pressed
    BNE POLL    ; loop if d1 != 0, loop until leftmost push button is pressed (= 0)
    ;else
    MOVE.B D2, $10(A1) ; show in leds
    BRA LOOP    ; repeat

    SIMHALT             ; halt simulator

* Put variables and constants here

    END    START        ; last line of source

*~Font name~Courier New~
*~Font size~10~
*~Tab type~1~
*~Tab size~4~
