@echo off
echo %FTPUSERNAME%> ftpcmd.dat
echo %FTPPASSWORD%>> ftpcmd.dat
echo cd %FTPDIR%>> ftpcmd.dat
echo put *.html>> ftpcmd.dat
echo put *.js>> ftpcmd.dat
echo put *.css>> ftpcmd.dat
echo quit>> ftpcmd.dat
ftp -s:ftpcmd.dat %FTPSERVER%
del ftpcmd.dat
