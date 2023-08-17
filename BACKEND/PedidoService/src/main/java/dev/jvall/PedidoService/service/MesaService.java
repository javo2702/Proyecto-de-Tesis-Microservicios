package dev.jvall.PedidoService.service;

import dev.jvall.PedidoService.model.Mesa;
import dev.jvall.PedidoService.repository.MesaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j //borrar depues
public class MesaService {
    private final MesaRepository mesaRepository;
    public List<Mesa> getTableList(){
        return mesaRepository.getTableList();
    }
    public Mesa changeTableState(int idmesa){
        return mesaRepository.changeTableState(idmesa);
    }
    public List<Mesa>  restoreTableState(int idmesa){
        return mesaRepository.restoreTableState(idmesa);
    }
    public Mesa getTableDetails(int idmesa){
        return mesaRepository.getTableDetails(idmesa);
    }
    public List<Mesa>  restoreTables(){
        return mesaRepository.restoreTables();
    }
}
