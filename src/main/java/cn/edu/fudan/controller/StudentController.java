package cn.edu.fudan.controller;

import cn.edu.fudan.domain.ResponseBean;
import cn.edu.fudan.dao.StudentDao;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Beethoven
 */
@RestController
public class StudentController {

    @Autowired
    public void setStudentDao(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    private StudentDao studentDao;

    @PostMapping("/api/v1/student")
    public Object insertStudentInfo(@RequestBody JSONObject jsonObject) {
        try{
            return new ResponseBean(200, "success!", studentDao.insertStudentInfo(jsonObject));
        }catch (Exception e){
            return new ResponseBean(401,"insert fail",e.getMessage());
        }
    }

    @GetMapping("/api/v1/student")
    public Object getStudentInfo() {
        try{
            return new ResponseBean(200, "success!", studentDao.getStudentInfo());
        }catch (Exception e){
            return new ResponseBean(401,"get student info fail",e.getMessage());
        }
    }

    @PutMapping("/api/v1/student")
    public Object updateStudentInfo(@RequestBody JSONObject jsonObject) {
        try{
            return new ResponseBean(200, "success!", studentDao.updateStudentInfo(jsonObject));
        }catch (Exception e){
            return new ResponseBean(401,"update fail",e.getMessage());
        }
    }

    @DeleteMapping("/api/v1/student")
    public Object deleteStudentInfo(@RequestBody JSONObject jsonObject) {
        try{
            return new ResponseBean(200, "success!", studentDao.deleteStudentInfo(jsonObject));
        }catch (Exception e){
            return new ResponseBean(401,"delete fail",e.getMessage());
        }
    }
}
