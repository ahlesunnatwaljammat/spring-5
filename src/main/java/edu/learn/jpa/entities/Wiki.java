package edu.learn.jpa.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Wiki {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Long id;
    private String content;

    protected Wiki() {}

    public Wiki(String content) {
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Wiki{" +
                "id=" + id +
                ", content='" + content + '\'' +
                '}';
    }
}
