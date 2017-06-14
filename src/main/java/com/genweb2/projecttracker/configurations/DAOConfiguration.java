package com.genweb2.projecttracker.configurations;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

/**
 * Created by shakil on 6/13/17.
 */

@Configuration
@EnableTransactionManagement
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@MapperScan("com.genweb2.projecttracker.persistence")
public class DAOConfiguration {

    @Value("${connection.datasource.driverClassName}")
    private String DB_DRIVER;

    @Value("${connection.datasource.password}")
    private String DB_PASSWORD;

    @Value("${connection.datasource.url}")
    private String DB_URL;

    @Value("${connection.datasource.username}")
    private String DB_USERNAME;

    @Bean(name = "dataSource")
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(DB_DRIVER);
        dataSource.setUrl(DB_URL);
        dataSource.setUsername(DB_USERNAME);
        dataSource.setPassword(DB_PASSWORD);
        return dataSource;
    }

    @Bean (name = "sqlSession")
    public SqlSessionTemplate sqlSession() throws Exception {
        return new SqlSessionTemplate(getSqlSessionFactoryBean());
    }

    @Bean (name = "transactionManager")
    public DataSourceTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }

    @Bean (name = "sqlSessionFactory")
    public SqlSessionFactory getSqlSessionFactoryBean() throws Exception {
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setTypeAliasesPackage("com.genweb2.projecttracker.vo");
        return sessionFactory.getObject();
    }
}
