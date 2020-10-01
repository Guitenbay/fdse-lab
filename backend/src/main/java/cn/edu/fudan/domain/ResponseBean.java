package cn.edu.fudan.domain;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseBean implements Serializable {

    private int code;

    private String msg;

    private Object data;

}
