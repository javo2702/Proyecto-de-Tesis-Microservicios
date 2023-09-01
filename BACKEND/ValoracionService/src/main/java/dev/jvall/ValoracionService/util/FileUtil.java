package dev.jvall.ValoracionService.util;

import java.nio.file.Path;
import java.nio.file.Paths;

public class FileUtil {
    public static String getFilePath(String fileName) {
        Path path = Paths.get("credential", fileName);
        return path.toString();
    }
}