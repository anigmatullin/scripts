@echo off
@echo start >sqlio.log

rem log - select, insert, update
rem read sequential pages
sqlio -kR -s30 -fsequential -o8 -b1 -LS -Fldf.txt >>sqlio.log
sqlio -kR -s30 -fsequential -o8 -b8 -LS -Fldf.txt >>sqlio.log
sqlio -kR -s30 -fsequential -o8 -b64 -LS -Fldf.txt >>sqlio.log
rem write sequential pages
sqlio -kW -s30 -fsequential -o8 -b1 -LS -Fldf.txt >>sqlio.log
sqlio -kW -s30 -fsequential -o8 -b8 -LS -Fldf.txt >>sqlio.log
sqlio -kW -s30 -fsequential -o8 -b64 -LS -Fldf.txt >>sqlio.log

rem timeout /T 1
