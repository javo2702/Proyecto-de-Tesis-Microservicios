package dev.jvall.PedidoService.repository;

import dev.jvall.PedidoService.model.Mesa;
import dev.jvall.PedidoService.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MesaRepository extends JpaRepository<Mesa,Integer> {
    @Query(value = "{call list_table()};", nativeQuery = true)
    List<Mesa> getTableList();
    @Query(value = "{call change_table_state(:idmesa_elegida)};", nativeQuery = true)
    Mesa changeTableState(@Param("idmesa_elegida")int idmesa_elegida);
    @Query(value = "{call restore_table_state(:idmesa_elegida)};", nativeQuery = true)
    List<Mesa>  restoreTableState(@Param("idmesa_elegida")int idmesa_elegida);
    @Query(value = "{call get_table(:idtable)};", nativeQuery = true)
    Mesa getTableDetails(@Param("idtable")int idtable);

    @Query(value = "{call restore_tables()};", nativeQuery = true)
    List<Mesa>  restoreTables();
}
