@echo off
@echo start >sqlio.log

rem data - select, insert, update
rem read random pages
sqlio -kR -s30 -frandom -o8 -b8 -LS -Fmdf.txt >>sqlio.log
sqlio -kR -s30 -frandom -o8 -b64 -LS -Fmdf.txt >>sqlio.log
sqlio -kR -s30 -frandom -o8 -b512 -LS -Fmdf.txt >>sqlio.log
rem write random pages
sqlio -kW -s30 -frandom -o8 -b8 -LS -Fmdf.txt >>sqlio.log
sqlio -kW -s30 -frandom -o8 -b64 -LS -Fmdf.txt >>sqlio.log
sqlio -kW -s30 -frandom -o8 -b512 -LS -Fmdf.txt >>sqlio.log

rem data - scan and bulk load
rem read sequential pages
sqlio -kR -s30 -fsequential -o8 -b64 -LS -Fmdf.txt >>sqlio.log
sqlio -kR -s30 -fsequential -o8 -b512 -LS -Fmdf.txt >>sqlio.log
rem write sequential pages
sqlio -kW -s30 -fsequential -o8 -b64 -LS -Fmdf.txt >>sqlio.log
sqlio -kW -s30 -fsequential -o8 -b512 -LS -Fmdf.txt >>sqlio.log

rem timeout /T 1
