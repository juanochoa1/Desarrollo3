/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Repository.CrudRepository;

import Model.Category;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author crisj
 */
public interface CategoryCrudRepository extends CrudRepository<Category, Integer>{
    
}
