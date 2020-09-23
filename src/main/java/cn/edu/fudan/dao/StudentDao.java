package cn.edu.fudan.dao;

import cn.edu.fudan.domain.dbo.Student;
import cn.edu.fudan.mapper.StudentMapper;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Beethoven
 */
@Repository
public class StudentDao {
    private StudentMapper studentMapper;

    @Autowired
    public void setStudentMapper(StudentMapper studentMapper) {
        this.studentMapper = studentMapper;
    }

    public Object insertStudentInfo(JSONObject requestParam) {
        JSONArray jsonArray = requestParam.getJSONArray("studentList");
        List<Student> studentList = new ArrayList();
        if (jsonArray != null && jsonArray.size() > 0) {
            for (int i = 0; i < jsonArray.size(); i++) {
                String studentId = jsonArray.getJSONObject(i).getString("studentId");
                String name = jsonArray.getJSONObject(i).getString("name");
                String department = jsonArray.getJSONObject(i).getString("department");
                String major = jsonArray.getJSONObject(i).getString("major");
                Student student = new Student(studentId,name,department,major);
                studentList.add(student);
            }
        }
        studentMapper.insertStudentInfo(studentList);
        return "these students information insert success";
    }

    public Object getStudentInfo() {
        List<Student> studentList = studentMapper.getStudentInfo();
        return studentList;
    }

    public Object updateStudentInfo(JSONObject jsonObject) {
        String studentId = jsonObject.getString("studentId");
        String name = jsonObject.getString("name");
        String department = jsonObject.getString("department");
        String major = jsonObject.getString("major");
        studentMapper.updateStudentInfo(studentId,name,department,major);
        return "update student information success";
    }

    public Object deleteStudentInfo(JSONObject jsonObject) {
        String studentId = jsonObject.getString("studentId");
        studentMapper.deleteStudentInfo(studentId);
        return "delete student information success";
    }
}
