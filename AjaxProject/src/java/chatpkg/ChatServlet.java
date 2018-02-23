/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chatpkg;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.Vector;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author David Emil
 */
@WebServlet(urlPatterns = {"/chatServlet"})
public class ChatServlet extends HttpServlet{
    static Vector<MessageDTO> myMessages = new Vector<>();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        MessageDTO dto = new MessageDTO();
        String name = req.getParameter("name");
        String message = req.getParameter("message");
        dto.setMessage(message);
        dto.setName(name);
        myMessages.add(dto);
        
        resp.getWriter().println(buildGsonFromObject(myMessages));
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().println(buildGsonFromObject(myMessages));
    }
    
    
    private String buildGsonFromObject(Vector<MessageDTO> vec){
        Gson gsonMessage = new Gson();
        return gsonMessage.toJson(vec);
    }
    
}
