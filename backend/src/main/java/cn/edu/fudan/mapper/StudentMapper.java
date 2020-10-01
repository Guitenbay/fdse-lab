package cn.edu.fudan.mapper;

import cn.edu.fudan.domain.dbo.Student;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Beethoven
 */
@Repository
public interface StudentMapper {

    /**
     * insert student info
     *
     * @param list 学生信息
     */
    void insertStudentInfo(List<Student> list);

    /**
     * get all student info
     *
     */
    List<Student> getStudentInfo();

    /**
     * update student info by studentId
     *
     * @param studentId 学生id
     * @param name 学生姓名
     * @param department 学生所在系
     * @param major 专业
     */
    void updateStudentInfo(String studentId, String name, String department, String major);

    /**
     * delete student info by studentId
     *
     * @param studentId 学生id
     */
    void deleteStudentInfo(String studentId);
}
