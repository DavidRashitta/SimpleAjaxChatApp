<%-- 
    Document   : index
    Created on : Feb 23, 2018, 10:28:34 PM
    Author     : David Emil
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%--<%@page session="false" %>--%>
<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="myjavascript.js"></script>
    </head>
    <body>
        name : <input type="text" id="name"><br/>
        Message : <input type="text" id="message"><br/>
        <button id="sendbtn" value="send">Send</button>
        <br/><br/>
        <table id="messages" border="1px" width="400"></table>

        <table id="activeUsers"  style="float:right;"></table>
    </body>
</html>
